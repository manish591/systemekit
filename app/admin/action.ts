"use server";

import { auth } from "@/auth";
import { Role } from "@prisma/client";
import { prisma } from "@/prisma";
import { FormValues } from "./component-form";

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

export async function createNewComponent(data: FormValues) {
  const isAdmin = await isUserAdmin();

  if (!isAdmin) {
    throw new Error("Unauthorized");
  }

  await prisma.component.create({
    data: {
      name: data.name,
      slug: data.slug,
      description: data.description,
      previewIframe: data.previewIframe,
      previewImage: data.previewImage,
      accessLevel: data.accessLevel,
      status: data.status,
      usageGuide: data.usageGuide,
      cssCode: data.cssCode ?? "",
      htmlCode: data.htmlCode ?? "",
      jsCode: data.jsCode ?? "",
    }
  });
}