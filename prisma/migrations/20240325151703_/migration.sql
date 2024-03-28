/*
  Warnings:

  - You are about to drop the `Catalog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Catalog";

-- CreateTable
CREATE TABLE "catalog" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_image_url" TEXT NOT NULL,

    CONSTRAINT "catalog_pkey" PRIMARY KEY ("id")
);
