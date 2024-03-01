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
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Our revolutionary technology has accomplished the flow of exact and precise navigation  </p> 
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
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold"> Our App</h1>
  </div>
  <div className="relative w-full md:w-3/4 lg:w-2/3">
    <div className="bg-white rounded-lg shadow-lg p-2 md:p-4">
      <Image
        src="/PhoneDemonstration.png"
        alt="Image"
        width={400} // Adjust width as per your requirement
        height={600} // Adjust height as per your requirement
        layout="responsive"
        objectFit="contain" // You can adjust objectFit based on your image's aspect ratio
        className="mx-auto" // Center the image horizontally
      />
    </div>
  </div>
</section>





        <section className = "bg-gray-800 text-white">
        <h1 className = "w-full text-5xl font-bold leading-tight text-center text-white-800"> Our App Flow </h1>
          <ActiveSlider />

        </section>

    <section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Leader in transitional technology</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          ELD Logging 
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
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> GPS Navigation  </h3> 
          <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
          </div>
        </div>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          Efficient and Effective Transport 
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
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Placeholder text </h3> 
          <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
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