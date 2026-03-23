/*
  Warnings:

  - You are about to drop the column `location_or_link` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `title` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "location_or_link",
ADD COLUMN     "link" TEXT,
ADD COLUMN     "location" TEXT;
