-- CreateTable
CREATE TABLE `Property` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `pricePerWeek` INTEGER NOT NULL,
    `pricePerSeason` INTEGER NOT NULL,
    `numberOfBedrooms` INTEGER NOT NULL,
    `numberOfBaths` INTEGER NOT NULL,
    `availability` BOOLEAN NOT NULL,
    `imageSrc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
