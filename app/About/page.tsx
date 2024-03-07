import Image from 'next/image'
import { Link } from "@nextui-org/link";
import ImageDisplay from '../components/ImageDisplay'; 
import { FaCalendarCheck } from "react-icons/fa";





export default function About() {
    return(
        <>
    <section className="bg-white border-900 relative overflow-hidden text-white">
    <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/NavigationCity.jpeg" alt="Background Image" layout="fill" objectFit="cover" />
    </div>
    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Achieve the future of pinnacle design</h1>
            <p className="max-w-2xl mb-6 font-light text-white-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white-400">Our technology will deliver the most promising results and deliver the best GPS navigation. Sign up for a free demo and learn more</p>
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

    <section className="pt-10 pb-8 lg:pt-[90px] lg:pb-[60px] dark:bg-dark">
  <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4">
      <div className="mx-auto mb-8 max-w-[510px] text-center lg:mb-12">
        <h2 className="dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
          What We Offer
        </h2>
        <p className="text-body-color text-base dark:text-dark-6 text-left">
          At WayPoint Technologies, our commitment to information security and privacy is unwavering. Through ongoing investments in engineering, proven technologies, processes, and talent, we ensure the delivery of top-tier telematics services. Continuous enhancement and innovation are central to our mission, positioning us as the premier partner for telematics solutions today and beyond.
        </p>
      </div>
    </div>
  </div> 

   <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/truckfleets.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
     //background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                Successful delivery
            </h4>
        </div>
    </div>
    </div>


    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/technology.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
    // background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                Advanced Technology
            </h4>
        </div>
    </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/DeviceSecurity.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
    // background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                Device Security 
            </h4>
        </div>
    </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/CustomerSupport.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
     //background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                Customer Support 
            </h4>
        </div>
    </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/worldwide.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
     //background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                WorldWide Coverage
            </h4>
        </div>
    </div>
    </div>
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10 relative">
        <div className="absolute inset-0 bg-primary rounded-[20px] overflow-hidden">
            <Image
                src="/AccurateTracking.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
        </div>

        <div className="relative z-10 mt-16" style={{ 
     //background: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
     padding: '10px', // padding so the background extends beyond the text
     borderRadius: '5px' // rounded corners if preferred
}}>
    <h4 className="text-white mb-[14px] text-2xl font-semibold">
                Accurate Tracking 
            </h4>
        </div>
    </div>
    </div>
      </div>
   </div>
</section>



<section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Celebrating Precision: Accurate Tracking with Unmatched Support </h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Accurate Tracking 
        </h3> 
        <p className = "text-gray-600 mb-8"> WayPoint Technologies stands as a global frontrunner in tracking solutions, specializing in fleet management, vehicle telematics, and connected car services. Renowned as a leading SaaS solution, WayPoint Technologies caters to a diverse clientele ranging from small businesses to large corporations, all seeking to enhance vehicle performance, fuel efficiency, driver support, and fleet optimization. Furthermore, our services extend to encompass various industries, including car insurance, rental and leasing companies, car importers, and other entities serving professionals and individuals alike. </p> 
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
          height={500}
          src="/location.jpg"
          width={300}
        />
       </div> 
      </div>

      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full h-64 mx-auto"
          height={300}
          src= "/Monitoring.jpg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Profound Technology </h3> 
          <p className = "text-gray-600 mb-8"> At WayPoint Technologies, we provide a variety of services, including tracking devices monitored through our user-friendly software accessible on any device. Our specialties include precise geolocation, ELD logging, fleet management, and outstanding customer support. Our scalable solutions adapt to your changing needs, ensuring a smooth experience. As we expand, our technology evolves, offering the most streamlined solutions available. </p> 
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

  
    <section className="bg-white text-center">
      <h1 className="text-4xl font-bold mt-8">Access your software with multiple devices</h1>
      <h2 className="text-xl mt-4">Our advanced technology seamlessly integrates across multiple devices, providing users with unparalleled access to essential features such as geolocation services and route optimization. Whether you&apos;re on the go or in the office, our robust software delivers precise and up-to-date tracking information for your products. With cutting-edge capabilities, we ensure that you have the most accurate data at your fingertips, empowering you to make informed decisions and streamline operations effortlessly.
      </h2>
      <img 
    src="/MultipleDevices.jpeg" 
    alt="Multiple Devices" 
    className="mx-auto mt-8 w-full max-w-screen-lg"
      />
    </section>


  <section className="bg-emerald-950 px-4 py-8 md:py-16 lg:py-24">
    <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Start your next journey now </h1>
    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-8">Handle the new age of technology </h2>
    <div className="flex justify-center space-x-4">
    <Link href="/More_Info" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
                <span className="relative">Free Demo</span>
    </Link>
    <Link href="/Contact" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
                <span className="relative">Contact us</span>
      </Link>
    </div>
  </div>
  </section>



  
  




       </> 

    )
}