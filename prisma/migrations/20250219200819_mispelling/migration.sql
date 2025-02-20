/*
  Warnings:

  - The values [system_io] on the enum `Platform` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Platform_new" AS ENUM ('systeme_io', 'go_high_level');
ALTER TABLE "ComponentDetails" ALTER COLUMN "plateform" TYPE "Platform_new" USING ("plateform"::text::"Platform_new");
ALTER TYPE "Platform" RENAME TO "Platform_old";
ALTER TYPE "Platform_new" RENAME TO "Platform";
DROP TYPE "Platform_old";
COMMIT;
