/*
  Warnings:

  - You are about to drop the `MessageFile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MessageFile" DROP CONSTRAINT "MessageFile_file_id_fkey";

-- DropForeignKey
ALTER TABLE "MessageFile" DROP CONSTRAINT "MessageFile_message_id_fkey";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "file_id" INTEGER;

-- DropTable
DROP TABLE "MessageFile";

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;
