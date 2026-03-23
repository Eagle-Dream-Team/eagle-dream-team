/*
  Warnings:

  - You are about to drop the column `mis_id` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_mis_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "mis_id";
