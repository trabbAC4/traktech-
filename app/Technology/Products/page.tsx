'use client'


import Image from 'next/image'
import {useEffect, useState} from 'react';
import {Link} from "@nextui-org/link";
import ImageDisplay from '../../components/ImageDisplay';
import ActiveSlider from '../../components/ActiveSlider';





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

        <section className="bg-white">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Over 28+ Devices</h1>
          <p className="w-full mx-auto max-w-xl text-xl text-center text-gray-600">
            Explore our diverse range of over 28 meticulously crafted devices, each meticulously designed to cater to your unique fleet management needs. From precise geolocation trackers to advanced GPS navigation systems, our solutions are tailored to optimize vehicle tracking, asset management, and personnel monitoring. Whatever your operational requirements may be, rest assured we have the perfect solution to enhance your fleet management endeavors.
          </p>
          <ImageDisplay  />
      </section>


        <section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Leader in transitional technology</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Fast and Seamless
        </h3> 
        <p className = "text-gray-600 mb-8"> WayPoint Technologies stands as a global frontrunner in telematics solutions, specializing in fleet management, vehicle telematics, and connected car services. Renowned as a leading SaaS solution, WayPoint Technologies caters to a diverse clientele ranging from small businesses to large corporations, all seeking to enhance vehicle performance, fuel efficiency, driver support, and fleet optimization. Furthermore, our services extend to encompass various industries, including car insurance, rental and leasing companies, car importers, and other entities serving professionals and individuals alike. </p> 
       </div> 
       <div className = "w-full sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
       </div> 
      </div>

      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> We are always here to help  </h3> 
          <p className = "text-gray-600 mb-8"> At WayPoint Technologies, we provide a variety of services, including tracking devices monitored through our user-friendly software accessible on any device. Our specialties include precise geolocation, ELD logging, fleet management, and outstanding customer support. Our scalable solutions adapt to your changing needs, ensuring a smooth experience. As we expand, our technology evolves, offering the most streamlined solutions available. </p> 
          </div>
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
  <section className = "py-4">
      <div className = "flex flex-col w-full"> 
        <div>
          <h3 className = "text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">Ensure the best service </h3>
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