-- CreateTable
CREATE TABLE `User` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `sekolah` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
