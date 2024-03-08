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
        <Image src="/waypointlogo.jpeg"  alt="Waypoint Technologies Logo" className= "rounded-2xl" width={120} height={40} /> {/* Adjust width and height according to your logo size */}
        </Link>
      </div>
      
      {/* Menu items */}
      <div className="hidden lg:flex flex-grow justify-center">
      <Link href="/About" className="text-black text-lg mx-4 relative overflow-hidden hover:text-green-500">
      <span className="relative z-10 transition-all duration-500 ease-in-out border-b-2 border-transparent">About</span>
      </Link>
      <Link href="/contact" className="text-black text-lg mx-4 relative overflow-hidden hover:text-green-500">
      <span className="relative z-10 transition-all duration-500 ease-in-out border-b-2 border-transparent">Contact</span>
      </Link>
      <Link href="/Technology" className="text-black text-lg mx-4 relative overflow-hidden hover:text-green-500">
      <span className="relative z-10 transition-all duration-500 ease-in-out border-b-2 border-transparent">Technology</span>
      </Link>


      </div>

      {/* Free Demo Button and Dropdown */}
      <div className="flex lg:flex items-center">
      <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
                <span className="relative">Free Demo</span>
      </Link>
        {/* Dropdown */}
        <div className="relative lg:hidden">
          <button className="text-black px-4 py-2" onClick={() => setShowDropdown(!showDropdown)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link href= "/About" className="block px-4 py-2 text-black hover:bg-gray-100">About</Link>
            <Link href="/Contact" className="block px-4 py-2 text-black hover:bg-gray-100">Contact</Link>
            <Link href="/Technology" className="block px-4 py-2 text-black hover:bg-gray-100">Technology</Link>
            </div>
          
          )}
        </div>
        
      </div>
    </nav>
</>

    )
}






      
      
      
      

