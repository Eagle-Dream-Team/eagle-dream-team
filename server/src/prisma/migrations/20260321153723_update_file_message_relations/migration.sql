/*
  Warnings:

  - You are about to drop the column `allocation_id` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `message_id` on the `File` table. All the data in the column will be lost.
  - You are about to drop the `MeetingAllocation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `allocation_id` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_allocation_id_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_message_id_fkey";

-- DropForeignKey
ALTER TABLE "MeetingAllocation" DROP CONSTRAINT "MeetingAllocation_allocation_id_fkey";

-- DropForeignKey
ALTER TABLE "MeetingAllocation" DROP CONSTRAINT "MeetingAllocation_meeting_id_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "allocation_id",
DROP COLUMN "message_id";

-- AlterTable
ALTER TABLE "Meeting" ADD COLUMN     "allocation_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "MeetingAllocation";

-- CreateTable
CREATE TABLE "MessageFile" (
    "id" SERIAL NOT NULL,
    "message_id" INTEGER NOT NULL,
    "file_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessageFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MessageFile_message_id_file_id_key" ON "MessageFile"("message_id", "file_id");

-- AddForeignKey
ALTER TABLE "Meeting" ADD CONSTRAINT "Meeting_allocation_id_fkey" FOREIGN KEY ("allocation_id") REFERENCES "TutorAllocation"("allocation_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageFile" ADD CONSTRAINT "MessageFile_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("message_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageFile" ADD CONSTRAINT "MessageFile_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "File"("file_id") ON DELETE RESTRICT ON UPDATE CASCADE;
