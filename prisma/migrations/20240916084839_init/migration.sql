/*
  Warnings:

  - You are about to drop the `siswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `siswa`;

-- CreateTable
CREATE TABLE `dataDiri` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `tamatTahun` DATETIME(3) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `alamatTinggal` VARCHAR(191) NOT NULL,
    `noTlpn` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `akun` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `dataDiri_nik_key`(`nik`),
    UNIQUE INDEX `dataDiri_noTlpn_key`(`noTlpn`),
    UNIQUE INDEX `dataDiri_email_key`(`email`),
    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
