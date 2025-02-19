/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Component` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Component` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Component_slug_key" ON "Component"("slug");
