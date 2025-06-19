"use server";

import { auth } from "@/auth";
import { Role } from "@prisma/client";
import { prisma } from "@/prisma";

export async function isUserAdmin() {
  const session = await auth();

  if (!session) {
    return false;
  }

  const userId = session.user?.id;

  const usersDetails = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });

  if (!usersDetails) {
    return false;
  }

  return usersDetails.role === Role.ADMIN;
}

export async function getAllComponents() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return await prisma.component.findMany();
}

export async function createNewComponent() {

}