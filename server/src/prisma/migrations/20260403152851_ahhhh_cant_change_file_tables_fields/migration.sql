/*
  Warnings:

  - You are about to drop the column `type` on the `File` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('mp4', 'mp3', 'pdf', 'pptx', 'recording');

-- AlterTable
ALTER TABLE "File" DROP COLUMN "type",
ADD COLUMN     "file_type" TEXT;
