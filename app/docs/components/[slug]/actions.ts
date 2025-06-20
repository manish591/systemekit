"use server";

import { auth } from "@/auth";

export async function isProAccount() {
  const session = await auth();

  if (!session?.user) {
    return false;
  }

  // const userId = session.user.id;
  // const user = await prisma.user.findUnique({
  //   where: { id: userId },
  // });

  return true;
}