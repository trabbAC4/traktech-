import Image from 'next/image'
import { Link } from "@nextui-org/link";
import ImageDisplay from '../components/ImageDisplay'; 
import { FaCalendarCheck } from "react-icons/fa";





export default function About() {
    return(
        <>
        <section className="mb-4 relative flex justify-center p-6">
           <div className="max-w-3xl mx-auto text-center float-left">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4">
            Get started with the best technology and achieve financial independence
          </h1>
         <p className="text-lg text-gray-700 mb-4">
            Our technology will deliver the most promising results and deliver the best gps navigation. Sign up for a free demo and learn more
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
        </button>
    </div>
</section>

        



      

        <section className="bg-white rounded-lg p-6 shadow-md text-center my-8">
      <h1 className="text-black text-4xl md:text-center text-4xl sm:text-left text-2xl font-bold px-4">
          Our prominent technology has the best qualities available to assure the BEST results 
      </h1>

      <h3 className = "text-black text-xl my-8 "> We handle </h3>
      <div className="max-w-3xl mx-auto">
  <div className="flex flex-wrap justify-center">
  <ul className="list-none p-0 mx-4 my-2 md:mx-0 md:my-0 md:mr-4">
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">GPS Technology</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Wireless Devices</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Chips</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">ELD Logging</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Support Panel</span>
  </li>
</ul>

    <ul className="list-none p-0 mx-4 my-2 md:mx-0 md:my-0 md:ml-4">
    <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">GPS Technology</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Wireless Devices</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Chips</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">ELD Logging</span>
  </li>
  <li className="flex items-center mb-4">
    <span className="mr-3 text-xl"><FaCalendarCheck /></span>
    <span className="text-lg">Support Panel</span>
  </li>
    </ul>
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
          Achieve ultimate excellence 
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

    


    <section className="bg-gray-500 px-4 py-8 md:py-16 lg:py-24">
    <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Product handles</h1>
  </div>
  </section>

  <ImageDisplay /> 

 

  
  <section>
    <h1> Some stats </h1> 
  </section> 
  <section>
    <h1> Our Testimonials </h1>
  </section>


  <section className="bg-gray-500 px-4 py-8 md:py-16 lg:py-24">
    <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Achieve the new face of technology today</h1>
    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-8">Speak with our team and see which plan would be the best for you</h2>
    <div className="flex justify-center space-x-4">
      <Link href= "/More_Info"> 
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">Request a demo</button>
      </Link> 
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">Contact us</button>
    </div>
  </div>
  </section>



  
  




       </> 

    )
}