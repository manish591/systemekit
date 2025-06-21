/*
  Warnings:

  - You are about to drop the column `tier` on the `Account` table. All the data in the column will be lost.
  - Added the required column `previewImage` to the `Component` table without a default value. This is not possible if the table is not empty.
  - Made the column `usageGuide` on table `Component` required. This step will fail if there are existing NULL values in that column.
  - Made the column `previewIframe` on table `Component` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `accessLevel` on the `Component` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('FREE', 'PRO');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'PAID');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "tier";

-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "previewImage" TEXT NOT NULL,
ALTER COLUMN "usageGuide" SET NOT NULL,
ALTER COLUMN "previewIframe" SET NOT NULL,
DROP COLUMN "accessLevel",
ADD COLUMN     "accessLevel" "AccessLevel" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" "Plan" NOT NULL DEFAULT 'FREE';

-- DropEnum
DROP TYPE "Tier";

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_userId_key" ON "Payment"("userId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
