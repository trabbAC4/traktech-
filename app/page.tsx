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
  // const 
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
        <h1 className="text-4xl font-extrabold">Waypoint Technologies</h1>
        <h1 className="text-4xl font-extrabold mt-8">
         Made <span style = {{color: "blue"}}> entirely </span> in <span style={{color: "red"}}>America</span>
        </h1>

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

      <div className="mt-8 mx-auto max-w-screen-xl flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 p-4 tracking-wide">
        We are the world leaders in tracking technology
      </h1>

      <h3 className="text-xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
          Check your rate today
      </h3>


      <button className="bg-white text-black py-2 px-4 rounded mx-auto block mt-8">
        <Link href="/More_Info">See our prices</Link>
      </button>
    </div>

  <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 flex flex-col items-center">
    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 dark:text-gray-100">
      What we do 
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">USA-MADE Robust Hardware</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Made primarily in America as the top leaders in hardware</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Advanced Software Features</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Emerging groundbreaking technology. We strive to meet your needs
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Real-Time GPS Tracking</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We offer round-the-clock support for our customers.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/sample.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The leaders in Tracking Device Technology</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our product offers the best technologies for your needs. A free consultation is simply a click away
                  </p>
                  <button className="bg-white text-black py-4 px-8 rounded mx-auto block mt-8">
                  <Link href="/More_Info">See more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="w-full h-screen flex flex-col items-center justify-start py-12 md:py-24 lg:py-32 text-black bg-white">
  <h1 className="text-6xl font-extrabold text-center sm:w-2/3 lg:w-1/2 xl:w-1/3 mb-8">
    Our Features
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full sm:w-2/3 lg:w-1/2 xl:w-1/2">
  
  <div className="bg-gray-300 rounded-md p-8">
    <h1 className="text-2xl font-bold">EDL Logging</h1>
    <p> Our groundbreaking technology offers ACCURATE details with logging</p>
    <Image
      src="/sample.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />

    
  </div>


    {/* Rounded Div 2 */}
    <div className="bg-gray-300 rounded-md p-8">
      {/* Content goes here */}
    </div>

    {/* Rounded Div 3 */}
    <div className="bg-gray-300 rounded-md p-8">
      {/* Content goes here */}
    </div>

    {/* Rounded Div 4 */}
    <div className="bg-gray-300 rounded-md p-8">
      {/* Content goes here */}
    </div>
  </div>
</section>








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