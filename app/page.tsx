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
      <h1 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 p-4">
        The future for innovation
      </h1>

      <h3 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
        Check your rate today
      </h3>

      <button className="bg-white text-black py-2 px-4 rounded mx-auto block mt-8">
        <Link href="/More_Info">See our prices</Link>
      </button>

      <div className="mt-8 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
        <Image
          src="/sampleimage2.svg" // Path to the SVG in the public directory
          alt="Description of the SVG"
          width={400} // Set the width of the SVG
          height={200} // Set the height of the SVG
          className="mx-auto"
        />
      </div>
    </div>



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



<div className="mt-8 mx-auto max-w-screen-xl">
  <h1 className="text-4xl font-extrabold text-center mx-auto w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
    Our Features
  </h1>

  <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
  <div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-0 sm:mr-4 p-6">
  <p className="inline-block mb-4 text-lg sm:text-xl md:text-2xl sm:order-1">ELD Logging</p>
  <Image
    src="/sampleimage2.svg" // Path to the SVG in the public directory
    alt="Description of the SVG"
    width={400} // Set the width of the SVG
    height={200} // Set the height of the SVG
    className="mx-auto sm:order-2"
  />
</div>

<div className="flex flex-col sm:flex-row items-center mb-8 sm:mb-0 sm:ml-4 p-6">
  <Image
    src="/sampleimage2.svg" // Path to the SVG in the public directory
    alt="Description of the SVG"
    width={400} // Set the width of the SVG
    height={200} // Set the height of the SVG
    className="mx-auto sm:order-2"
  />
  <p className="inline-block mb-4 text-lg sm:text-xl md:text-2xl sm:order-1">IFTA Mileage Tracking</p>
</div>

    <div className="flex flex-col items-center mb-8 sm:mb-0 sm:mr-4 p-6">
      <p className="inline-block mb-4 text-lg sm:text-xl md:text-2xl">Real-Time GPS Tracking</p>
      <Image
        src="/sampleimage2.svg" // Path to the SVG in the public directory
        alt="Description of the SVG"
        width={400} // Set the width of the SVG
        height={200} // Set the height of the SVG
        className="mx-auto"
      />
    </div>
    <div className="flex flex-col items-center mb-8 sm:mb-0 sm:ml-4 p-6">
      <p className="inline-block mb-4 text-lg sm:text-xl md:text-2xl">Route Optimization</p>
      <Image
        src="/sampleimage2.svg" // Path to the SVG in the public directory
        alt="Description of the SVG"
        width={400} // Set the width of the SVG
        height={200} // Set the height of the SVG
        className="mx-auto"
      />
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