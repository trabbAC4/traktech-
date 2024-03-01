import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link} from "@nextui-org/link";


export default function Footer() {
    return (
      <>
			<div className="bg-gray-50 h-auto md:h-1/2 w-full flex flex-col md:flex-row justify-around items-start p-5 md:p-20">
  			<div className="p-5 ">
    		<ul>
          <Link href= "/"> 
      		<p className="text-gray-800 font-bold text-3xl pb-6">
        WayPoint<span className="text-green-600">Technologies</span>
         </p>
         </Link>
    </ul>
  </div>
  <div className="p-5">
    <ul>
      <Link href = "/Technology"> 
      <p className="text-green-800 font-bold text-2xl pb-4">Product</p>
      </Link> 

      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "/Technology"> 
         Our App 
         </Link>
      </li>

      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "/Technology/Products">
          GPS Tracking
        </Link>  
      </li>
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href = "/Technology/Products"> 
          ELD Logging
        </Link>   
      </li>
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "https://netfleet.us/track/index.php">
          Login Portal
        </Link> 
      </li>

    </ul>
  </div>
  <div className="p-5">
    <ul>
      <p className="text-green-800 font-bold text-2xl pb-4">Company</p>
      <Link href = "/About"> 
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        About
      </li>
      </Link> 
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
      <Link href= "/Technology/Products"> 
        Products
      </Link>
      </li>
    </ul>
  </div>
  <div className="p-5">
    <ul>
      <p className="text-green-800 font-bold text-2xl pb-4">Support</p>
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "/Contact"> 
        Contact
        </Link>
      </li>
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "/Technology/Products"> 
        Technical Support 
        </Link>
      </li>
      <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
        <Link href= "/More_Info"> Free Demo

        </Link>  
      </li>


    </ul>
  </div>
</div>

		</>
      
    )

}