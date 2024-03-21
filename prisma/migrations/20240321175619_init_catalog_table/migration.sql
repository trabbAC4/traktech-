/*
  Warnings:

  - Added the required column `product_image_url` to the `Catalog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalog" ADD COLUMN     "product_image_url" TEXT NOT NULL;
