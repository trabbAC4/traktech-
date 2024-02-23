'use client'
import React, {useState}  from 'react';
import {usePathname} from "next/navigation";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";

export default function Nav() {
    const [showDropdown, setShowDropdown] = useState(false);
    return( 
    <> 
      <nav className="bg-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href= "/">
        <h1 className="text-black text-lg font-semibold">Waypoint Technologies</h1>
        </Link>
      </div>
      
      {/* Menu items */}
      <div className="hidden lg:flex flex-grow justify-center">
        <Link href= "/More_Info" className="text-black text-lg mx-4 hover:text-gray-700">About</Link>
        <a href="#" className="text-black text-lg mx-4 hover:text-gray-700">Contact</a>
        <a href="#" className="text-black text-lg mx-4 hover:text-gray-700">Technology</a>
      </div>

      {/* Free Demo Button and Dropdown */}
      <div className="flex lg:flex items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hidden lg:block">Free Demo</button>
        {/* Dropdown */}
        <div className="relative lg:hidden">
          <button className="text-black px-4 py-2" onClick={() => setShowDropdown(!showDropdown)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">About</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Contact</a>
              <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Technology</a>
            </div>
          )}
        </div>
        <Link href= "/More_Info"> 
        <button className="bg-green-500 text-white px-4 py-2 rounded-md lg:hidden">Free Demo</button>
        </Link> 
        
      </div>
    </nav>
</>

    )
}






      
      
      
      

