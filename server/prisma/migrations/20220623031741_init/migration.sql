-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_fk_post_id_fkey`;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_fk_post_id_fkey` FOREIGN KEY (`fk_post_id`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
