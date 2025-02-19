-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('system_io', 'go_high_level');

-- CreateTable
CREATE TABLE "Component" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plateform" "Platform" NOT NULL,
    "cssCode" TEXT NOT NULL,
    "htmlCode" TEXT,
    "jsCode" TEXT,
    "preview_iframe" TEXT NOT NULL,
    "usage_guide" TEXT NOT NULL,
    "accessLevel" "Tier" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);
