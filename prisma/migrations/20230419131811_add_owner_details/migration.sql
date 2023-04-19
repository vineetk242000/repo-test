/*
  Warnings:

  - Added the required column `contact` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locality` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Home" ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "locality" TEXT NOT NULL,
ADD COLUMN     "ownerName" TEXT NOT NULL;
