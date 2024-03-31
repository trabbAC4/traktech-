'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  product_image_url: string;
}

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const pathname = usePathname();
  
  useEffect(() => {
    const pathSegments = pathname.split('/');
    const id = pathSegments[pathSegments.length - 1];

    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/catalog/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setProduct(data);
        console.log("Fetched product image URL:", data.product_image_url);  // Correct property name
      } catch (error) {
        console.error("Fetching product failed:", error);
      }
    };

    fetchProduct();
  }, [pathname]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
  <img src={product.product_image_url} alt={product.product_name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
  <h1 style={{ marginTop: '20px', fontSize: '28px', fontFamily: "'Arial', sans-serif", textAlign: 'center' }}>{product.product_name}</h1>
  <p style={{ fontSize: '18px', fontFamily: "'Arial', sans-serif", textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginTop: '10px' }}>{product.product_description}</p>
</div>


  );
};

export default ProductPage;
