/*
  Warnings:

  - You are about to drop the column `step3Data` on the `Form` table. All the data in the column will be lost.
  - Added the required column `isCompleted` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Form" DROP COLUMN "step3Data",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;
