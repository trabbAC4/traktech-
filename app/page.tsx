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
      Picture or content and later emb it to a newsletter 
    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">User-friendly Software</h2>
    <div className="text-center">
    Picture or content and later emb it to a newsletter 
    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Real-time Updates</h2>
    <div className="text-center">
    Picture or content and later emb it to a newsletter 
    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Seamless Integration</h2>
    <div className="text-center">
    Picture or content and later emb it to a newsletter 
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