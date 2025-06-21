"use server";

import { prisma } from "@/prisma";
import { ComponentStatus } from "@prisma/client";

export async function getComponentDocumentationSlugs() {
  const data = await prisma.component.findMany({
    where: {
      status: ComponentStatus.PUBLISHED
    },
    select: {
      name: true,
      slug: true
    }
  });

  const modifiedData = data.map(item => ({
    name: item.name,
    href: `/docs/components/${item.slug}`
  }));

  return modifiedData;
}
