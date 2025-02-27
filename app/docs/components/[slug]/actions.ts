"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { Platform } from "@prisma/client";

export async function getComponentData(componentSlug: string, plateform: keyof typeof Platform) {
  try {
    const componentData = await prisma.component.findUnique({
      where: {
        slug: componentSlug
      },
      include: {
        component_details: {
          where: {
            plateform: plateform
          },
          select: {
            cssCode: true,
            htmlCode: true,
            jsCode: true,
            usage_guide: true
          }
        }
      }
    });

    if (!componentData) {
      return {
        status: 404,
        message: "Not found",
        data: null
      }
    }

    if (componentData.accessLevel == "FREE") {
      return {
        status: 200,
        message: "data fetched successfully",
        data: {
          name: componentData.name,
          description: componentData.description,
          previewIframe: componentData.preview_iframe,
          htmlCode: componentData.component_details[0].htmlCode,
          cssCode: componentData.component_details[0].cssCode,
          jsCode: componentData.component_details[0].jsCode,
          usageGuide: componentData.component_details[0].usage_guide,
        }
      }
    }

    // paid component
    const session = await auth();

    if (!session) {
      return {
        status: 200,
        message: "data fetched successfully",
        data: {
          name: componentData.name,
          description: componentData.description,
          previewIframe: componentData.preview_iframe,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          usageGuide: "",
        }
      }
    }

    return {
      status: 200,
      message: "data fetched successfully",
      data: {
        name: componentData.name,
        description: componentData.description,
        previewIframe: componentData.preview_iframe,
        htmlCode: componentData.component_details[0].htmlCode,
        cssCode: componentData.component_details[0].cssCode,
        jsCode: componentData.component_details[0].jsCode,
        usageGuide: componentData.component_details[0].usage_guide,
      }

    }
  } catch (err) {
    return {
      status: 500,
      message: err,
      data: null
    }
  }
}