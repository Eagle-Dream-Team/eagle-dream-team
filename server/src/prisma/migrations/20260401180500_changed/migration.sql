/*
  Warnings:

  - Changed the type of `file_type` on the `File` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "file_type",
ADD COLUMN     "file_type" TEXT NOT NULL;
