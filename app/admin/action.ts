"use server";

import { auth } from "@/auth";
import { Role } from "@prisma/client";
import { prisma } from "@/prisma";

export async function isUserAdmin() {
  try {
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
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getAllComponents() {
  try {
    const componentsData = await prisma.component.findMany();

    if (!componentsData) {
      return {
        message: "not found",
        status: 404,
        data: null
      }
    }

    return {
      message: "found successfully",
      status: 200,
      data: componentsData
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
      status: 500,
      data: null
    }
  }
}