/*
  Warnings:

  - You are about to drop the column `cssCode` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `htmlCode` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `jsCode` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `plateform` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `usage_guide` on the `Component` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Component" DROP COLUMN "cssCode",
DROP COLUMN "htmlCode",
DROP COLUMN "jsCode",
DROP COLUMN "plateform",
DROP COLUMN "usage_guide";

-- CreateTable
CREATE TABLE "ComponentDetails" (
    "componentId" TEXT NOT NULL,
    "plateform" "Platform" NOT NULL,
    "cssCode" TEXT NOT NULL,
    "htmlCode" TEXT,
    "jsCode" TEXT,
    "usage_guide" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ComponentDetails_pkey" PRIMARY KEY ("plateform","componentId")
);

-- AddForeignKey
ALTER TABLE "ComponentDetails" ADD CONSTRAINT "ComponentDetails_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
