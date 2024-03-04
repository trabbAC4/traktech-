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
        <section className="bg-gray-2 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
   <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     Active Geolocation 
                     </a>
                  </h3>
                  <p
                     className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7"
                     >
                       Monitor your vehicles effectively and with care. See what devices are active and what are not in your user portal with worldwide coverage.
                  </p>
                  <a
                     href="javascript:void(0)"
                     className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  Learn More 
                  </a>
               </div>
            </div>
         </div>
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                          Fleet Management Monitoring
                     </a>
                  </h3>
                  <p className="text-base leading-relaxed text-body-color mb-7">
                      Ensure that your fleet runs efficiently, effectively, and within budget. Monitor your vehicles and visually see where they are at all times.
                  </p>
                  <a
                     href="javascript:void(0)"
                     className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  Learn More 
                  </a>
               </div>
            </div>
         </div>
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <img
                  src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-black hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     An all-in-one User Interface 
                     </a>
                  </h3>
                  <p className="text-base leading-relaxed text-body-color mb-7">
                  Tracking all your fleet information should be effortless. From monitoring vehicle statuses to optimizing routes, our interface provides users with comprehensive insights.

                  </p>
                  <a
                     href="javascript:void(0)"
                     className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
          
          
        
        </>
    )
}