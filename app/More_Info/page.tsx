'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
//import ImageDisplay from '../components/ImageDisplay'
import Image from 'next/image'
import { Link } from "@nextui-org/link";
import {Input, Textarea} from "@nextui-org/react";








export default function More_Info() {
    return (
        <>
  <div className="flex flex-col lg:flex-row">
  {/* Left side */}
  <div className="lg:w-1/2 bg-gray-200 p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Us for a FREE demo</h2>
    <h3 className= "text-xl mb-4"> Take the first step in expanding your business with our technology </h3>
    
    <form className="w-full max-w-md">
      <div className="mb-4 w-full">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
      </div>
      <div className="mb-4 w-full">
      <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="border border-gray-400 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:border-blue-500 transition-all duration-300"
      ></textarea>

      </div>
      <div className="mb-4 w-full flex justify-between">
        <input
          type="number"
          id="equipment"
          name="equipment"
          min="0"
          placeholder="Equipment"
          className="border border-gray-400 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <input
          type="number"
          id="vehicles"
          name="vehicles"
          min="0"
          placeholder="Vehicles"
          className="border border-gray-400 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
      </div>
      
      <Link href="/BookNow" className="shadow-2xl relative inline-flex items-center justify-center px-16 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-emerald-green-950">
        <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Request a Demo</span>
      </Link>



    </form>
  </div>
  {/* Right side */}
  <div className="lg:w-1/2 relative"> 
    <div className = "absolute inset-0">
        <Image 
            src= "/FreeDemo.jpeg"
            alt= "Background Image"
            layout = "fill"
            objectFit=  "cover"
        /> 
    </div>
  </div>
</div>


        </> 
    )
}