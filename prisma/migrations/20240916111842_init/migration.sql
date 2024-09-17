/*
  Warnings:

  - The primary key for the `datadiri` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `no` on the `datadiri` table. All the data in the column will be lost.
  - You are about to alter the column `nik` on the `datadiri` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `id` to the `dataDiri` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `datadiri` DROP PRIMARY KEY,
    DROP COLUMN `no`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `nik` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `bekerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mulaiTahun` INTEGER NOT NULL,
    `tempatBekerja` VARCHAR(191) NOT NULL,
    `alamatBekerja` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `statusPekerjaan` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wirausaha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bidangWirausaha` VARCHAR(191) NOT NULL,
    `gaji` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kuliah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tempatKuliah` VARCHAR(191) NOT NULL,
    `alamatKuliah` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
