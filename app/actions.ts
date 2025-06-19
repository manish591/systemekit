"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function getUserData() {
  try {
    const session = await auth();

    if (!session) {
      return {
        status: 404,
        message: "Not found",
        isLoggedIn: false,
        data: null
      }
    }

    const accountDetails = await prisma.user.findUnique({
      where: {
        id: session.user?.id
      },
      include: {
        accounts: {
          where: {
            userId: session?.user?.id
          }
        }
      }
    });

    if (!accountDetails) {
      return {
        status: 404,
        message: "data not found",
        isLoggedIn: false,
        data: null
      }
    }

    return {
      status: 200,
      message: "data returned successfully",
      isLoggedIn: true,
      data: {
        tier: accountDetails.accounts[0].tier,
        name: accountDetails.name as string,
        email: accountDetails.email,
        image: accountDetails.image as string
      }
    }
  } catch (err) {
    return {
      isLoggedIn: false,
      status: 500,
      message: err,
      data: null
    }
  }
}

export async function getAllComponents() {
  const data = await prisma.component.findMany({
    select: {
      id: true,
      name: true,
      slug: true
    }
  });

  return data;
}