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

<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
   <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
         <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
               <h2
                  className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                  >
                  What We Offer
               </h2>
               <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
            </div>
         </div>
      </div>
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                WorldWide Coverage
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

        <div className="relative z-10 mt-16">
            <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                Device Security 
            </h4>
        </div>
    </div>
    </div>
      </div>
   </div>
</section>



<section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Leader in transitional technology</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Accurate Tracking 
        </h3> 
        <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
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
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Profound Technology </h3> 
          <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
          </div>
        </div>
      </div>

    </section>

    


    <section className="md:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-4">Our Products</h1>
        </div>
          <ImageDisplay /> 
    </section>

  <section className="bg-gray-500 px-4 py-8 md:py-16 lg:py-24">
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