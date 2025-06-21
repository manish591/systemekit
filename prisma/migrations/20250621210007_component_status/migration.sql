/*
  Warnings:

  - Added the required column `status` to the `Component` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ComponentStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "status" "ComponentStatus" NOT NULL;
