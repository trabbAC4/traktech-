'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React , {useState} from 'react';




interface Product {
    id: number;
    title: string;
    image: string; 
    price: number; 

}

  

const products: Product[] = [
    {id: 1, title: 'Product 1', image: 'product1.jpg', price: 19.99},
    { id: 2, title: 'Product 2', image: 'product2.jpg', price: 29.99 },
    { id: 3, title: 'Product 3', image: 'product3.jpg', price: 39.99 },
    { id: 4, title: 'Product 4', image: 'product4.jpg', price: 49.99 },
];

export default function Checkout() {
    const handleProductClick = (price: number) => {
        // Handle product click logic, e.g., update total price
        console.log(`Product clicked. Price: $${price.toFixed(2)}`);
      };
    
      
    return (
        <>
        <Navbar />
        <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Complete Your Orders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 cursor-pointer"
            onClick={() => handleProductClick(product.price)}
          >
            <img src={product.image} alt={product.title} className="mb-2 w-full h-32 object-cover" />
            <p className="text-center">{product.title}</p>
            <p className="text-center text-green-500 font-bold"></p>
          </div>
        ))}
      </div>

      <form className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" className="input-field" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" className="input-field" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" className="input-field" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="input-field" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" className="input-field" />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" className="input-field" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="input-field" />
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="creditCard">Credit Card</label>
          <input type="text" id="creditCard" className="input-field" />
        </div>

        <button type="submit" className="btn mt-8">Checkout</button>
      </form>
    </div>
      <Footer />
    </> 
    )
}