import React from 'react';
import {usePathname} from "next/navigation";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenu,
    NavbarMenuToggle,
  } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

  




export default function Navbar() {
    return(
        <div className="bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0">
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white font-bold text-lg">TrakTech</span>
        </div>
      
        {/* Middle Section (Navigation Links) */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">About Us</a>
          <a href="#" className="text-white hover:text-gray-300">Details</a>
          {/* Add more navigation links as needed */}
        </div>
      
        {/* Right Section (Buttons) */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Us</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Check Prices</button>
        </div>
      </div>
      
      
      
      


    )
}