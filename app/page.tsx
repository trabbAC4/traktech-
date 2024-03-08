'use client'

import Image from 'next/image'
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "next-ui-org/react";
import Footer from './components/Footer'
import Navbar from './components/Nav'
import {VStack, Text, Input} from "@chakra-ui/react"
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link } from "@nextui-org/link";
import SlideShow from './components/slideshow';
import AnimatedChart from './components/Graphs';
import ImageGallery from './components/imagegallery'
//import ImageDisplay from './components/ImageDisplay'
import ActiveSlider from './components/ActiveSlider'
import AnimatedNumbers from './components/AnimatedNumbers'
import { FaFlagUsa } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { LiaTruckSolid } from "react-icons/lia";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbGps } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa6";






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

    <div className="relative"> {/* This div is used to position the video and text relative to each other */}
    <video 
      src="\landing_page_video.mp4" // Assuming the video is in the public folder
      //type="video/mp4" // Include the MIME type
      autoPlay // if you want it to autoplay
      muted // if you want it to autoplay in modern browsers
      loop // for looping the video
    />

<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-start" style={{ paddingTop: '10vh' }}> {/* Inline styles to position text at the top with padding */}
  <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', maxWidth: '80%', margin: '0 auto' }}> {/* Larger text for main heading */}
    Revolutionize Fleet Management with WayPoint Technologies
  </h1>
  <p style={{ color: 'white', fontSize: '18px', textAlign: 'center', maxWidth: '80%', margin: '0 auto 20px' }}> {/* Smaller text for subheading */}
    Unlock the future of tracking technology with our precise ELD Logging and efficient fleet management services. Join us for a free consultation.
  </p>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}> {/* Inline styles for button container */}
			<Link href="/BookNow" className="shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
				<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
				<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</span>
				<span className="relative">Book a call</span>
			</Link>
			<Link href="/More_Info" className="shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
				<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
				<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
				</span>
				<span className="relative">Schedule a Demo</span>
			</Link>
			</div>
        </div>  
          </div>
      
    

      <main className = "scroll-smooth">
      <section className="bg-white rounded-lg p-6 shadow-md text-center my-8">
      <div className={`transition-opacity duration-1000 `}>
      <h1 className="text-black text-4xl md:text-center text-4xl sm:text-left text-2xl font-bold px-4">
          Track your company&apos;s vehicles and reduce your fleet management costs with WayPoint Technologies
      </h1>
      <h3 className = "text-black text-xl my-8 "> WayPoint Technologies is the leading cloud software for professional vehicle tracking and fleet management, made <span className = "font-bold"> primarily </span> in America </h3>
      <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black-900 dark:text-black-100 my-8">
       Our Key Features
  </h2>
<div className="flex flex-wrap justify-center">
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">GPS Technology and real-time tracking</h2>
    <div className="text-center">
      <Image src="/gps.svg" alt="SVG Image" width={64} height={64} />
    </div>
  </div>

  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Fleet Management and Optimization</h2>
    <div className="text-center">
      <Image src="/fleetmanagement.svg" alt="SVG Image" width={64} height={64} />
    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Workflow Management and quality of service</h2>
    <div className="text-center">
      <Image src="/workflow.svg" alt="SVG Image" width={64} height={64} />
    </div>
  </div>
  <div className="w-64 p-4 m-4 border rounded-lg flex flex-col items-center">
    <h2 className="text-lg font-bold mb-2 text-center">Seamless Integration in existing Software</h2>
    <div className="text-center">
      <Image src="/software.svg" alt="SVG Image" width={64} height={64} />
    </div>
  </div>
</div>
</div> 
</section>
<section>
  <div className={`transition-opacity duration-1000 `}>
    <ImageGallery /> 
  </div> 

</section>
  



    <section className = "bg-white border-b py-8">
      <div className={`transition-opacity duration-1000 `}>
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Leader in transitional technology</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Achieve Ultimate Excellence 
        </h3> 
        <p className="text-gray-600 mt-12 mb-12 text-lg lg:text-xl leading-relaxed">
         Track the precise location of your vehicles with our cutting-edge fleet-tracking solution, whether they&apos;re parked or in motion, all in real-time on a dynamic map interface. Utilize advanced geolocation technology to swiftly pinpoint the nearest driver for rapid intervention, enhancing customer satisfaction and slashing road time. Harness the power of GPS geolocation to optimize cost-efficiency and boost productivity across your fleet operations.
        </p>

        <div className="flex justify-center">
        <Link href="/BookNow" className="shadow-2xl relative inline-flex items-center px-16 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Request a Demo</span>
        </Link>
      </div>
       </div> 
       <div className = "w-full lg:w-1/2 sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full mx-auto rounded-lg"
          height={400}
          src="/grouptrucks.jpg"
          width={400}
        />
       </div> 
      </div>


      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full lg:w-1/2 sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full h-full object-cover rounded-lg"
          height={400}
          src= "/customerphone.jpg"
          width={400}
        />
        </div>
        <div className = "w-full lg:w-1/2 sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none  mb-3"> Contact a specialist  </h3> 
          <p className="text-gray-600 mt-12 mb-12 text-lg lg:text-xl"> Streamline communication by sending vital information directly to your driver&apos;s device with seamless integration between our tracking device and your platform. Experience the ease of real-time location updates and instant results at your fingertips. Minimize administrative burdens with automated time recording, enabling precise tracking and enhancement of driving behaviors effortlessly. </p> 
          <div className = "flex justify-center"> 
          <Link href="/BookNow" className="shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
         <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="relative">Book a Call </span>
      </Link>
      </div> 
         </div>
        </div>
      </div>
    </div>
    </section>

  <section className="flex flex-col justify-center items-center mt-12 mb-12 py-8 md:py-6 lg:py-8 text-white relative overflow-hidden">
  {/* Custom circle background */}
  <h1 className="text-6xl font-extrabold text-center mb-8 text-black relative z-10">
    Our <span className = "text-green"> Impact </span> 
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl relative z-10">
    {/* Box 1 */}
    <div className="bg-emerald-950 rounded-full p-4 sm:p-6 text-center">
     <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <FaFlagUsa /> </p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers  start={0} end={100} /> %
      </p>
      <p className="text-lg text-white">Products are manufactured in the United States</p>
    </div>

    {/* Box 2 */}
    <div className="bg-emerald-900 rounded-full p-4 sm:p-6 text-center">
      <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <RiComputerLine /> </p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers start={0} end={95} /> %
      </p>
      <p className="text-lg text-white">Software reliability</p>
    </div>

    {/* Box 3 */}
    <div className="bg-emerald-800 rounded-full p-4 sm:p-6 text-center">
    <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <LiaTruckSolid /> </p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers start={500} end={10000} /> +
      </p>
      <p className="text-lg text-white">Fleets and vehicles monitored worldwide</p>
    </div>

    {/* Box 4 */}
    <div className="bg-emerald-700 rounded-full p-4 sm:p-6 text-center">
    <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <HiMiniDevicePhoneMobile /></p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers start={0} end={28} /> +
      </p>
      <p className="text-lg text-white">Different devices for your needs</p>
    </div>

    {/* Box 5 */}
    <div className="bg-emerald-950 rounded-full p-4 sm:p-6 text-center">
    <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <TbGps /> </p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers start = {0} end = {90} /> %</p>
      <p className="text-lg text-white">Accuracy rate </p> 
    </div> 
    {/* Box 6 */}
    <div className="bg-emerald-950 rounded-full p-4 sm:p-6 text-center">
    <p className="text-4xl font-bold text-white-900 mb-4 flex justify-center"> <FaUserCheck /> </p>
      <p className="text-4xl font-bold text-white-900 mb-4">
        <AnimatedNumbers start = {0} end = {100000} /> +</p>
      <p className="text-lg text-white">Satisfied Customers </p> 
    </div>
  </div>
</section>




  






    
    
    <section className="relative">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src="/WaypointBanner.jpeg"
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section> 
    <section className = "py-8">
      <div className = "flex flex-col w-full"> 
        <div>
          <h3 className = "text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">See your devices around the world</h3>
          <p className = "leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"> With the state of the art location tracking, our devices and software are more than capable of tracking the way</p>
        </div>
        <div className="flex justify-center pw-full px-8">
          <Image 
            src="/location.svg"
            alt="Location"
            width={600}
            height={300}
            className="h-auto md:max-w-1/2"
          /> 
      </div>


      </div>
    </section>


    <section className="bg-emerald-950 px-4 py-8 md:py-16 lg:py-24">
    <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find your way with WayPoint</h1>
    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-8">Speak with our team and see which plan would be the best for you</h2>
    <div className="flex justify-center space-x-4">
    <Link href="/BookNow" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative text-white">Request a Demo</span>
      </Link>
      <Link href="/BookNow" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative text-white">Contact Us</span>
      </Link>
    </div>
  </div>
  </section>

  









    


    </main>
    </>
  );
}