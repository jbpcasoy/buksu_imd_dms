/*
  Warnings:

  - Added the required column `fileName` to the `IM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IM" ADD COLUMN     "fileName" TEXT NOT NULL;
