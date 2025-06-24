"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { AccessLevel, Component, Plan, Role } from "@prisma/client";

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

export async function getComponentsData(slug: string) {
  const componentData = await prisma.component.findUnique({
    where: {
      slug
    }
  });

  if (!componentData) {
    throw new Error("data not found");
  }

  if (componentData.accessLevel === AccessLevel.FREE) {
    return componentData;
  }

  const componentWithoutCode: Component = {
    ...componentData,
    htmlCode: "",
    cssCode: "",
    jsCode: ""
  }

  const session = await auth();

  if (!session?.user) {
    return componentWithoutCode;
  }

  const userData = await prisma.user.findFirst({
    where: {
      id: session.user.id
    },
    select: {
      role: true,
      plan: true
    }
  });

  if (!userData) {
    return componentWithoutCode;
  }

  if (userData.role === Role.ADMIN || userData.plan === Plan.PAID) {
    return componentData;
  }

  return componentWithoutCode;
}