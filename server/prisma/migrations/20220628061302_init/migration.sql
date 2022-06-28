/*
  Warnings:

  - You are about to drop the column `hashedRt` on the `comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `hashedRt`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `hashedRt` VARCHAR(191) NULL;
