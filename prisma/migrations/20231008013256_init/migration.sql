-- CreateTable
CREATE TABLE `Donation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `displayName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NULL,
    `team` VARCHAR(191) NULL,
    `mesaage` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
