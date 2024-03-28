'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  image_url: string;
}

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const pathname = usePathname();
  
  useEffect(() => {
    // Extracting the ID from the pathname
    const pathSegments = pathname.split('/');
    const id = pathSegments[pathSegments.length - 1]; // Assuming the ID is the last segment

    if (!id) return; // Exit if no ID is found

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/catalog/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetching product failed:", error);
      }
    };

    fetchProduct();
  }, [pathname]); // Depend on pathname for reactivity

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.product_name}</h1>
      <p>{product.product_description}</p>
      {product.image_url && <img src={product.image_url} alt={product.product_name} />}
    </div>
  );
};

export default ProductPage;
