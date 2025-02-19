import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // add components
  const freeComponentGHL = prisma.component.create({
    data: {
      name: "gradient button",
      description: "lorem",
      accessLevel: "FREE",
      plateform: "go_high_level",
      preview_iframe: "",
      cssCode: "",
      usage_guide: "",
    }
  });

  const freeComponentSysteme = prisma.component.create({
    data: {
      name: "gradient button",
      description: "lorem",
      accessLevel: "FREE",
      plateform: "go_high_level",
      preview_iframe: "",
      cssCode: "",
      usage_guide: "",
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })