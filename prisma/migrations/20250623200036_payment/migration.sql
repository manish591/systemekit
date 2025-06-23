/*
  Warnings:

  - Added the required column `status` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('FAILED', 'SUCCESS');

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "status" "PaymentStatus" NOT NULL;
