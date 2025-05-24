/*
  Warnings:

  - Added the required column `description` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `Sale_stockId_fkey`;

-- DropIndex
DROP INDEX `Sale_stockId_fkey` ON `sale`;

-- AlterTable
ALTER TABLE `stock` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
