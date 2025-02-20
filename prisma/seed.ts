import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // add free component for  and systeme
  const gradientButton = await prisma.component.upsert({
    where: { slug: "gradient-button" },
    update: {},
    create: {
      slug: "gradient-button",
      name: "gradient button",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          earum laboriosam, ipsa impedit vel non animi, expedita illo maxime
          quasi praesentium quisquam enim illum. Impedit expedita quibusdam
          exercitationem dolorum veniam? Ab rem quo voluptatum quibusdam.`,
      accessLevel: "FREE",
      preview_iframe: "",
    }
  });

  await prisma.componentDetails.upsert({
    where: {
      plateform_componentId: {
        componentId: gradientButton.id,
        plateform: "go_high_level"
      }
    },
    update: {},
    create: {
      cssCode: `#gradient-button {\nbackground: #808080;\nbackground: -webkit-linear-gradient(to right, #3fada8, #808080);\nbackground: linear-gradient(to right, #3fada8, #808080);\n}`,
      plateform: "go_high_level",
      usage_guide: "https://youtu.be/05wedQWDPDM",
      htmlCode: null,
      jsCode: null,
      componentId: gradientButton.id
    }
  });

  await prisma.componentDetails.upsert({
    where: {
      plateform_componentId: {
        componentId: gradientButton.id,
        plateform: "systeme_io"
      }
    },
    update: {},
    create: {
      cssCode: `#your_button_id {\nbackground: #808080;\nbackground: -webkit-linear-gradient(to right, #3fada8, #808080);\nbackground: linear-gradient(to right, #3fada8, #808080);\n}`,
      plateform: "systeme_io",
      usage_guide: "https://youtu.be/05wedQWDPDM",
      htmlCode: null,
      jsCode: null,
      componentId: gradientButton.id
    }
  });

  // add pro components for ghl and systeme
  const gradientText = await prisma.component.upsert({
    where: { slug: "gradient-text" },
    update: {},
    create: {
      slug: "gradient-text",
      name: "gradient text",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          earum laboriosam, ipsa impedit vel non animi, expedita illo maxime
          quasi praesentium quisquam enim illum. Impedit expedita quibusdam
          exercitationem dolorum veniam? Ab rem quo voluptatum quibusdam.`,
      accessLevel: "PRO",
      preview_iframe: "",
    }
  });

  await prisma.componentDetails.upsert({
    where: {
      plateform_componentId: {
        componentId: gradientText.id,
        plateform: "go_high_level"
      }
    },
    update: {},
    create: {
      cssCode: `#your_text_id {\nbackground: -webkit-linear-gradient(#eee, #333);\n
      -webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\n}`,
      plateform: "go_high_level",
      usage_guide: "https://youtu.be/4r9uhBk6yBo",
      htmlCode: null,
      jsCode: null,
      componentId: gradientText.id
    }
  });

  await prisma.componentDetails.upsert({
    where: {
      plateform_componentId: {
        componentId: gradientText.id,
        plateform: "systeme_io"
      }
    },
    update: {},
    create: {
      cssCode: `#your_text_id {\nbackground: -webkit-linear-gradient(#eee, #333);\n
      -webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\n}`,
      plateform: "systeme_io",
      usage_guide: "https://youtu.be/4r9uhBk6yBo",
      htmlCode: null,
      jsCode: null,
      componentId: gradientText.id
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