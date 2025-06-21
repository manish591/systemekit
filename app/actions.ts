"use server";

import { prisma } from "@/prisma";

export async function getComponentDocumentationSlugs() {
  const data = await prisma.component.findMany({
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
