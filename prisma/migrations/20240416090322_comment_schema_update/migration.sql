/*
  Warnings:

  - Added the required column `comment_date` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "comment_date" TEXT NOT NULL;
