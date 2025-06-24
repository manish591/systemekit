"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { Plan } from "@prisma/client";

export async function isPremiumAccount() {
  const session = await auth();

  if (!session?.user) {
    return false;
  }

  const userId = session.user.id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return false;
  }

  return user.plan === Plan.PAID;
}

// export async function getComponentsData(slug: string) {
//   const componentData = await prisma.component.findUnique({
//     where: {
//       slug,
//     }
//   });
// }