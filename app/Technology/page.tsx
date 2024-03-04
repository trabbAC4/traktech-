"use client"

import Image from 'next/image'
import ActiveSlider from '../components/ActiveSlider'
import {Link} from '@nextui-org/link';


export default function Technology() {
    return(
        <>
        
        <section className = "bg-white border-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black">Definite Location Tracking</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Our groundbreaking technology represents the pinnacle of navigation precision, offering unparalleled accuracy in global tracking. Our futuristic app stands as the epitome of effectiveness and reliability, setting the standard for tracking devices worldwide. Setting up an account is effortless and streamlined, requiring just a few minutes to complete, ensuring a seamless user experience.  </p> 
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
               <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Book a free call!</span>
            </Link>
            <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
               <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">Get a free Demo!</span>
            </Link>
          </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image 
              src= "/PhoneDemonstration2.png"
              alt=  "phone" 
              width = {450}
              height = {300}

            /> 
          </div>
        </div>

        </section>

        <section className="flex flex-col justify-center items-center min-h-screen bg-white">
  <div className="text-center mb-4 md:mb-8">
    <h1 className="text-4xl font-bold">Our App</h1>
  </div>
  <div className="relative w-full md:w-3/4 lg:w-2/3">
    <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 mx-4 md:mx-auto">
      <Image
        src="/PhoneDemonstration.png"
        alt="Image"
        width={600} // Adjust width as per your requirement
        height={800} // Adjust height as per your requirement
        layout="responsive"
        objectFit="contain" // You can adjust objectFit based on your image's aspect ratio
        className="mx-auto" // Center the image horizontally
      />
    </div>
  </div>
</section>



    <section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Complete coverage over your assets</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          ELD Logging 
        </h3> 
        <p className = "text-gray-600 mb-8"> ELD Logging, an integral component of modern fleet management, ensures meticulous tracking of vehicle activity. At WayPoint Technologies, our ELD Logging system stands out for its precision and thorough monitoring capabilities. We pride ourselves on delivering accurate data that enables seamless compliance with regulatory standards while optimizing operational efficiency. Moreover, our solution is highly scalable, catering to the tracking needs of multiple fleets, regardless of size or complexity. With WayPoint Technologies, rest assured that your fleet management endeavors are backed by reliable and adaptable ELD Logging solutions. </p> 
        <Link href="/MoreInfo" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Request a Demo</span>
        </Link>
       </div> 
       <div className = "w-full sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full mx-auto"
          height={300}
          src="/TrucksDriving.jpeg"
          width={300}
        />
       </div> 
      </div>

      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full mx-auto"
          height={300}
          src="/gpslocation.jpeg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> GPS Navigation  </h3> 
          <p className = "text-gray-600 mb-8"> Our scalable GPS navigation system is designed to accurately monitor devices across the globe, ensuring precise tracking and location data anywhere in the world. At WayPoint Technologies, we take pride in our cutting-edge technology that provides real-time insights into vehicle movements and locations. Moreover, our system offers route optimization capabilities, enabling businesses to plan and execute the most efficient routes for their fleets. Whether you're operating locally or globally, trust WayPoint Technologies to provide a scalable GPS navigation solution that enhances operational efficiency and maximizes productivity. </p> 
          <Link href="/BookNow" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Book a Call</span>
        </Link>
          </div>
        </div>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Fleet Management 
        </h3> 
        <p className = "text-gray-600 mb-8"> At WayPoint Technologies, our fleet management solution offers a comprehensive approach to optimizing vehicle operations and enhancing overall efficiency. With our advanced technology, businesses can streamline their fleet management processes, from vehicle tracking to maintenance scheduling. Our system meticulously tracks every aspect of fleet activity, ensuring accuracy and reliability in all tracking data. By providing real-time insights into vehicle locations, performance metrics, and driver behavior, we empower businesses to make informed decisions and improve operational efficiency. Trust WayPoint Technologies for a fleet management solution that is efficient, reliable, and carefully tracked to deliver accurate results at every turn. </p> 
        <Link href="/MoreInfo" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Request a Demo</span>
        </Link>

       </div> 
       <div className = "w-full sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full mx-auto"
          height={300}
          src="/FleetManage.jpeg"
          width={300}
        />
       </div> 
      </div>
      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full mx-auto"
          height={300}
          src="/Geolocation.jpeg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Enhanced Geolocation </h3> 
          <p className = "text-gray-600 mb-8"> At WayPoint Technologies, our geolocation services are second to none, delivering excellent and accurate results for your vehicle monitoring needs. Our software harnesses advanced technology to provide real-time tracking and precise location data, ensuring that you always have a clear understanding of your fleet's whereabouts. With a simple and intuitive interface, our software makes it easy to visualize the location of your devices at any given time. Whether you're managing a single vehicle or an entire fleet, trust WayPoint Technologies to provide reliable geolocation solutions that offer peace of mind and unparalleled visibility into your operations. </p> 
          <Link href="/BookNow" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Book a Call</span>
         </Link>
          </div>
        </div>
      </div>
      </section>

      <section className = "py-8">
      <div className = "flex flex-col w-full"> 
        <div>
          <h3 className = "text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">A platform that locates your device 24/7</h3>
          <p className = "leading-normal mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12"> Whether you're tracking assets, managing fleets, or ensuring safety, Waypoint Technologies has you covered. Our cutting-edge technology harnesses the latest in GPS innovation, guaranteeing accurate location data every time </p>
        </div>
        <div className="flex justify-center pw-full px-8">
          <Image 
            src="/website.svg"
            alt="website"
            width={600}
            height={300}
            className="h-auto md:max-w-1/2"
          /> 
      </div>


      </div>
    </section>



        </>
    )
}