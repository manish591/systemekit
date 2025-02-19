-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('FREE', 'PRO');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
