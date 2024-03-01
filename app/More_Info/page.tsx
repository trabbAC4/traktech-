'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Survey from '../components/Survey'
import ImageDisplay from '../components/ImageDisplay'
import Image from 'next/image'







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
          rows="4"
          className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition-all duration-300"
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md w-full focus:outline-none transition-all duration-300"
      >
        Get a Demo
      </button>
    </form>
  </div>
  {/* Right side */}
  <div className="lg:w-1/2 relative"> 
    <div className = "absolute inset-0">
        <Image 
            src= "/WaypointBanner.jpeg"
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