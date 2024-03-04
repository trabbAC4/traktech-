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
           <section className="bg-white border-900 relative overflow-hidden text-white">
    <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/Sustainable.jpg" alt="Background Image" layout="fill" objectFit="cover" />
    </div>
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Sustainable and Efficient</h1>
            <p className="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">Our revolutionary technology not only ensures precise navigation but also champions sustainability and effectiveness. By optimizing routes with meticulous detail, we not only cut costs but also minimize environmental impact, promoting sustainable practices. Moreover, our scalable system efficiently handles large fleet volumes, paving the way for business success and growth. </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Book a free call!</span>
                </Link>
                <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Learn More</span>
                </Link>
            </div>
        </div>
    </div>
    </section>

        <section className="bg-white">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Over 28+ Devices</h1>
          <p className="w-full mx-auto max-w-xl text-xl text-center text-gray-600">
            Explore our diverse range of over 28 devices, each meticulously designed to cater to your unique fleet management needs. From precise geolocation trackers to advanced GPS navigation systems, our solutions are tailored to optimize vehicle tracking, asset management, and personnel monitoring. Whatever your operational requirements may be, rest assured we have the perfect solution to enhance your fleet management endeavors.
          </p>
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
          src="/seamless.svg"
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
          src="/help.svg"
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
                 <Image 
                  src ="/Geolocation.jpeg"
                  alt= "geolocation"
                  className = "w-full"
                  height = {300}
                  width = {300}

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
                  <Link href="/More_Info" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			      <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		    </span>
                	    <span className="relative">Learn More</span>
                  </Link>
               </div>
            </div>
         </div>
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <Image 
                  src ="/FleetManage.jpeg"
                  alt= "geolocation"
                  className = "w-full h-72"
                  height = {300}
                  width = {300}
                  
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
                  <Link href="/More_Info" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			      <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		    </span>
                	    <span className="relative">Learn More</span>
                  </Link>
               </div>
            </div>
         </div>
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <Image 
                  src ="/Monitoring.jpg"
                  alt= "geolocation"
                  className = "w-full"
                  height = {300}
                  width = {300}
                  
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
                  <Link href="/More_Info" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			      <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		    </span>
                	    <span className="relative">Learn More</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  <section className = "py-4">
      <div className = "flex flex-col w-full"> 
        <div>
          <h3 className = "text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"> Maximize your investment in an emerging product  </h3>
          <p className = "leading-normal mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12"> We proudly present our technology as the epitome of robustness and advancement within the device tracking industry. Our cutting-edge solutions surpass all others, offering unparalleled accuracy, efficiency, and reliability. With a steadfast commitment to continuous improvement, we prioritize strong customer support and user-friendly software, ensuring that our clients not only maximize their investment but also experience seamless navigation towards their business objectives. </p>
        </div>
        <div className="flex justify-center pw-full px-8">
          <Image 
            src=  "/Tech.svg"
            alt="tech"
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