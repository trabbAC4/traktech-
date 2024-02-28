'use client'


import Image from 'next/image'
import {useEffect, useState} from 'react';
import {Link} from "@nextui-org/link";



export default function Product() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(

        <>
            <section className = "bg-white border-900">
              <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
               <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-black">Definite Location Tracking</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Our revolutionary technology has accomplished the flow of exact and precise navigation  </p> 
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link href="https://github.com/themesberg/landwind" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"> Book a call 
            </Link>
          <Link href="https://www.figma.com/community/file/1125744163617429490" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Get a demo 

            </Link>
          </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image 
              src= "/image1app.jpeg"
              alt=  "phone" 
              width = {300}
              height = {300}

            /> 
          </div>
        </div>

        </section>

                 <section> 
                    <h1> GPS Tracking </h1>

                    
                 </section>

            <section>
                <h1> ELD Logging </h1>
            </section>

            <section> 

         <div className="flex flex-wrap justify-center lg:justify-between max-w-xl mx-auto">
      <div className="border p-4 lg:w-1/3 w-full mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-2 text-center">Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="border p-4 lg:w-1/3 w-full mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-2 text-center">Title 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="border p-4 lg:w-1/3 w-full">
        <h2 className="text-xl font-bold mb-2 text-center">Title 3</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
    </section> 
        
        </>
    )
}