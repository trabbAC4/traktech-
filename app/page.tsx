'use client'

import Image from 'next/image'
import Survey from './components/survey';
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "next-ui-org/react";
import Footer from './components/Footer'
import Navbar from './components/Nav'
import {VStack, Text, Input} from "@chakra-ui/react"
import {useForm} from 'react-hook-form';
import { Link } from "@nextui-org/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"






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
      <main className = "bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-50">
        <Navbar />
      </main>
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


      <h1 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
      The future for innovation </h1>

      <h3 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
       Check your rate today </h3>

       <button className="bg-black text-white py-2 px-4 rounded mx-auto block mt-8">
         <Link href= "/More_Info"> 
          See our prices
        </Link>
        </button> 



      <div className="flex justify-center items-center h-screen">
  <Carousel className="w-full max-w-sm max-w-lg">
    <CarouselContent className="-ml-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>


      




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
      <div className="flex justify-center items-center h-screen">
        <div className="border border-black p-4">
        <h1 className="text-black font-bold text-lg">Contact us now to elevate your tracking game with TrakTech</h1>
        </div>
      </div>
      <div className="h-screen bg-black"> 
        <h1 className="text-4xl text-white font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
            We strive to accomodate your requests and we plan to deliver the next groundbreaking technology
        </h1>
      </div>

      <h1 className="text-4xl text-black font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
        Note: Hardware priced at $110. Prices subject to change 
      </h1>
      <Footer />
    </>
  );
}