/*
  Warnings:

  - Added the required column `address` to the `Home` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sqfeet` to the `Home` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Home" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "sqfeet" INTEGER NOT NULL;
