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

  return(
  <> 
      {/* Include head element for video and styles */}
      <main className = "scroll-smooth">
      <div className = "bg-gray-800 p-4 flex items-center justify-between fixed w-full top-0 z-50">
        <Navbar />
      </div>
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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="650"
                src="/trackingdevice.jpg"
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

  <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 flex flex-col items-center">
    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 dark:text-gray-100">
      What we do 
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="flex flex-col items-center text-center">
        <img src="https://cdn.hugeicons.com/icons/mentor-stroke-rounded.svg" alt="mentor" width="48" height="48" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">USA-MADE Robust Hardware</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">Made primarily in America as the top leaders in hardware</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <img src="https://cdn.hugeicons.com/icons/software-license-stroke-rounded.svg" alt="software-license" width="48" height="48" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Advanced Software Features</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Emerging groundbreaking technology. We strive to meet your needs
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <img src="https://cdn.hugeicons.com/icons/map-pinpoint-02-stroke-rounded.svg" alt="map-pinpoint-02" width="48" height="48" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Real-Time GPS Tracking</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We offer round-the-clock support for our customers.
        </p>
      </div>
    </div>
  </div>
</section>

    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 dark:text-gray-100">
      What we offer 
    </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
        <img
          alt="Product Image"
          className="aspect-square object-cover w-full"
          height={500}
          src="/logging.jpg"
          width={500}
        />
        <div className="animate-pulse p-4">
          <h3 className="font-bold text-lg">ELD Logging</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is a description of the first product. It's a great product.
          </p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
        <img
          alt="Product Image"
          className="aspect-square object-cover w-full"
          height={500}
          src="/IFTA.jpg"
          width={500}
        />
        <div className="animate-pulse p-4">
          <h3 className="font-bold text-lg">IFTA Mileage Tracking</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is a description of the second product. It's an even better product.
          </p>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
        <Image
          alt="Product Image"
          className="aspect-square object-cover w-full"
          height={500}
          src="/gps.jpg"
          width={500}
        />
        <div className="animate-pulse p-4">
          <h3 className="font-bold text-lg">Real Time GPS Tracking</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is a description of the third product. It's the best product of them all.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact us for a free consultation</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Navigation has and will Always be an important tool 
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                So why not invest in the product that will take you there safely 
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us now to elevate your tracking game with WayPoint Technologies!
              </p>
              <button className="bg-white text-black py-4 px-8 rounded mx-auto block mt-8">
                  <Link href="/More_Info">See more</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center"> {/* Center the image */}
          <Image
          alt="Product Image"
          className="aspect-square object-cover w-full"
          height={500}
          src="/customerservice.jpg"
          width={600}
          />
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
      <div className="hidden lg:flex lg:justify-end"> {/* Add this div for the right-side spacing */}
      <Image
          alt="Product Image"
          className="aspect-square object-cover w-full"
          height={500}
          src="/customerservice.jpg"
          width={600}
        />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">We are here to assist</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We strive to deliver the best possible information to you 
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Feel free to contact us 
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Contact us now to elevate your tracking game with WayPoint Technologies!
          </p>
          <button className="bg-white text-black py-4 px-8 rounded mx-auto block mt-8">
            <Link href="/More_Info">See more</Link>
          </button>
        </div>
      </div>
      <div className="lg:hidden"> {/* Add this div for mobile responsiveness */}
        {/* You can add some spacing or content here if needed */}
      </div>
      </div>
      </div>
    </section>

    <section>
      <h2 className= "text-center  text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 dark:text-gray-100"> Get started today </h2>
    </section>



    


    </main>
    </>
  );
}