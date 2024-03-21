-- CreateTable
CREATE TABLE "Catalog" (
    "id" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);
