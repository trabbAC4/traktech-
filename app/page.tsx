'use client'

import Image from 'next/image'
import Survey from './components/survey';
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "next-ui-org/react";
import Footer from './components/Footer'
import Navbar from './components/Nav'
import {VStack, Text, Input} from "@chakra-ui/react"
import {useForm} from 'react-hook-form';




export default function Home() {
  // const {
  //   register,
  //   handleSubmit
  // } = useForm(); 

  // function submitHandler(data) {
  //   console.log(data); 
  // }

  return(
  <> 
      {/* Include head element for video and styles */}
      <Navbar />
      <header className= "relative flex items-center justify-center h-screen mb-12 overflow-hidden"> 
      <div className = "relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        <h1 className="text-4xl font-extrabold">TrakTech</h1>
        <h1 className="text-4xl font-extrabold mt-8">Made entirely in America</h1>
        <button className="bg-white text-black py-2 px-4 rounded mx-auto block mt-8">See our prices</button>
      </div>
      <video
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        muted
        loop
      >
        
        <source src="/wallpaper_main.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
        </video>

        {/* Content overlay */}
      </header> 



  <div className="mt-8 mx-auto max-w-screen-xl">
  <h1 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
  Features  </h1>

  <div className="flex flex-wrap justify-center items-center mt-4">
    <div className="flex items-center mb-4">
      <p className="inline-block mr-4">ELD Logging</p>
      <span className="mx-2">|</span>
    </div>
    <div className="flex items-center mb-4">
      <p className="inline-block mr-4">IFTA Mileage Tracking</p>
      <span className="mx-2">|</span>
    </div>
    <div className="flex items-center mb-4">
      <p className="inline-block mr-4">Real-Time GPS Tracking</p>
      <span className="mx-2">|</span>
    </div>
    <div className="flex items-center mb-4">
      <p className="inline-block mr-4">Route Optimization</p>
      <span className="mx-2">|</span>
    </div>
  </div>
</div>



      <div className="mt-8 text-center">
      <h1 className="text-4xl font-extrabold mb-8">Our Pricing</h1>

      <div className="flex flex-wrap justify-center">
        {/* Product 1 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="border rounded p-6">
            <h2 className="text-xl font-bold mb-4">Integration</h2>
            <Image
            className="w-full md:w-auto md:h-auto md:mr-4"
            src="/Login.png"
            width={500}
            height={500}
            alt="Random"
            />
            <p className="text-2xl font-bold mt-4">$10/month </p>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Select</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="border rounded p-6">
            <h2 className="text-xl font-bold mb-4">GPS Tracking</h2>
            <Image
            className="w-full md:w-auto md:h-auto md:mr-4"
            src="/Login.png"
            width={500}
            height={500}
            alt="Random"
            />
            <p className="text-2xl font-bold mt-4">$20/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Select</button>
            
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="border rounded p-6">
            <h2 className="text-xl font-bold mb-4">Full Package</h2>
            <Image
            className="w-full md:w-auto md:h-auto md:mr-4"
            src="/Login.png"
            width={500}
            height={500}
            alt="Random"
            />
            <p className="text-2xl font-bold mt-4">$30/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Select</button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="border rounded p-6">
            <h2 className="text-xl font-bold mb-4">Custom Package</h2>
            <Image
            className="w-full md:w-auto md:h-auto md:mr-4"
            src="/Login.png"
            width={500}
            height={500}
            alt="Random"
            />
            <p className="text-2xl font-bold mt-4">$40/month</p>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Select</button>
          </div>
        </div>
      </div>
    </div>

      <div className="mt-24 text-center">
      <h1 className="text-4xl font-extrabold">What we do</h1>

      <div className="flex justify-center items-center mt-8">
        {/* Border 1 */}
        <div className="border p-4 mx-2">
          <h2 className="text-xl font-bold mb-2">USA-Made Robust Hardware 🇺🇸</h2>
          <p>Information for Section 1 goes here.</p>
        </div>

        {/* Border 2 */}
        <div className="border p-4 mx-2">
          <h2 className="text-xl font-bold mb-2">Advanced Software Features 🚀</h2>
          <p>Information for Section 2 goes here.</p>
        </div>

        {/* Border 3 */}
        <div className="border p-4 mx-2">
          <h2 className="text-xl font-bold mb-2">Affordable Monthly Plans 💰</h2>
          <p>Information for Section 3 goes here.</p>
        </div>
      </div>
    </div>

    <Footer /> 
    </>
  );
}