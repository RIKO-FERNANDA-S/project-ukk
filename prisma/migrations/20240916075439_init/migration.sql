/*
  Warnings:

  - Added the required column `jurusan` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `siswa` ADD COLUMN `jurusan` VARCHAR(191) NOT NULL;
