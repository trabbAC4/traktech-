'use client'

import Image from 'next/image'
import Survey from './components/Survey';
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "next-ui-org/react";
import Footer from './components/Footer'
import Navbar from './components/Nav'
import {VStack, Text, Input} from "@chakra-ui/react"
import {useForm} from 'react-hook-form';
import { Link } from "@nextui-org/link";
import SlideShow from './components/slideshow';
import AnimatedChart from './components/Graphs';
import ImageGallery from './components/imagegallery'




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
      <SlideShow />
      <main className = "scroll-smooth">
      <section className="bg-white rounded-lg p-6 shadow-md text-center my-8">
      <h1 className="text-black text-4xl md:text-center text-4xl sm:text-left text-2xl font-bold px-4">
          Track your company's vehicles and reduce your fleet management costs with WayPoint Technologies
      </h1>

      <h3 className = "text-black text-xl my-8 "> Webfleet is Europe's leading cloud software for professional vehicle tracking and fleet management and made <span className = "font-bold"> primarily </span> in America </h3>
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black-900 dark:text-black-100 my-8">
       Our Key Features
  </h2>
<div className="flex flex-wrap justify-center">
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Cutting Edge Technology</h2>
    <div className="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-12">
      <path d="M16.5 7.5h-9v9h9v-9Z" />
      <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
      </svg>

    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">User-friendly Software</h2>
    <div className="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-12">
      <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
    </svg>

    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Real-time Updates</h2>
    <div className="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
    </svg>

    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Seamless Integration</h2>
    <div className="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>

    </div>
  </div>
</div>
</section>
<section>
    <ImageGallery /> 

</section>
        


<section className="w-full h-screen flex flex-col items-center justify-start py-12 md:py-24 lg:py-32 text-white bg-black">
  <h1 className="text-6xl font-extrabold text-center sm:w-2/3 lg:w-1/2 xl:w-1/3 mb-8">
    Our Features
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full sm:w-2/3 lg:w-1/2 xl:w-2/3">
    {/* Box 1 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">100%</p>
      <p className="text-lg text-white">All of our products are manufactured in the United States</p>
    </div>

    {/* Box 2 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">95%</p>
      <p className="text-lg text-white">success rate with device</p>
    </div>

    {/* Box 3 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">100000+</p>
      <p className="text-lg text-white">Clientale messaging us</p>
    </div>

    {/* Box 4 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">98%</p>
      <p className="text-lg text-white">Improved longevity for our hardware devices</p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full sm:w-2/3 lg:w-1/2 xl:w-2/3">
    {/* Box 1 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">28+</p>
      <p className="text-lg text-white">Different devices for your needs</p>
    </div>

    {/* Box 2 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">95%</p>
      <p className="text-lg text-white">success rate with device</p>
    </div>

    {/* Box 3 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">100000+</p>
      <p className="text-lg text-white">Clientale messaging us</p>
    </div>

    {/* Box 4 */}
    <div className="bg-black rounded-md p-6 text-center">
      <p className="text-4xl font-bold text-green-900 mb-4">98%</p>
      <p className="text-lg text-white">Improved longevity for our hardware devices</p>
    </div>
  </div>

  
</section>


    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black-900 dark:text-black-100 py-12">
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
            This is a description of the first product. It&apos;s a great product.
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
            This is a description of the second product. It&apos;s an even better product.
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
            This is a description of the third product. It&apos;s the best product of them all.
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

      <section className="w-full h-screen flex flex-col items-center justify-center py-4 md:py-24 lg:py-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Connect with us</h2>
        <div className="w-full flex justify-center">
    </div>
    </section>







    


    </main>
    </>
  );
}