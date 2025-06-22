import { Webhook } from "standardwebhooks";
import { headers } from "next/headers";
import { prisma } from "@/prisma";
import { Plan } from "@prisma/client";

const webhook = new Webhook(process.env.DODO_PAYMENTS_WEBHOOK_KEY!);

export async function POST(request: Request) {
  const headersList = await headers();

  try {
    const rawBody = await request.text();
    const webhookHeaders = {
      "webhook-id": headersList.get("webhook-id") ?? "",
      "webhook-signature": headersList.get("webhook-signature") ?? "",
      "webhook-timestamp": headersList.get("webhook-timestamp") ?? "",
    };
    await webhook.verify(rawBody, webhookHeaders);
    const payload = JSON.parse(rawBody);

    if (payload.data.payload_type === "Payment" && payload.type === "payment.succeeded") {
      const paymentId = payload.data.payment_id as string;
      const paymentCreatedAt = payload.data.created_at as string;
      const customerEmail = payload.data.customer.email as string;
      const userData = await prisma.user.findUnique({
        where: {
          email: customerEmail
        }
      });

      if (!userData) {
        return Response.json(
          { message: "Webhook processed successfully" },
          { status: 200 }
        );
      }

      await prisma.$transaction([
        prisma.user.update({
          where: {
            email: customerEmail
          },
          data: {
            plan: Plan.PAID
          }
        }),
        prisma.payment.create({
          data: {
            paymentId,
            createdAt: paymentCreatedAt,
            userId: userData?.id
          }
        })
      ]);
    }

    return Response.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(" ----- webhoook verification failed -----")
    console.log(error)
    return Response.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  }
}