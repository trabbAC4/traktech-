import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {Link} from "@nextui-org/link";
import Image from 'next/image'



export default function Footer() {
    return (
      <>
			<div className=" h-auto md:h-1/2 w-full flex flex-col md:flex-row justify-around items-start p-5 md:p-20"
      style={{ backgroundColor: '#6d596e' }}>
  			<div className="p-5 ">
    		<ul>
        <Link href= "/">
        <Image src="/waypointlogo.jpeg" alt="Waypoint Technologies Logo" className = "rounded-2xl" width={200} height={50} /> {/* Adjust width and height according to your logo size */}
        </Link>
    </ul>
  </div>
  <div className="p-5">
    <ul>
      <Link href = "/Technology"> 
      <a className="font-bold text-2xl pb-4" style={{ color: '#fce2a8' }}>Product</a>
      </Link> 

      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "/Technology"> 
         Our App 
         </Link>
      </li>

      <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "/Technology/Products">
          GPS Tracking
        </Link>  
      </li>
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href = "/Technology/Products"> 
          ELD Logging
        </Link>   
      </li>
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "https://netfleet.us/track/index.php">
          Login Portal
        </Link> 
      </li>

    </ul>
  </div>
  <div className="p-5">
    <ul>
      <p className="font-bold text-2xl pb-4" style={{ color: '#fce2a8' }}>Company</p>
      <Link href = "/About"> 
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        About
      </li>
      </Link> 
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
      <Link href= "/Technology/Products"> 
        Products
      </Link>
      </li>
    </ul>
  </div>
  <div className="p-5">
    <ul>
      <p className=" font-bold text-2xl pb-4" style={{ color: '#fce2a8' }}>Support</p>
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "/Contact"> 
        Contact
        </Link>
      </li>
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "/Technology/Products"> 
        Technical Support 
        </Link>
      </li>
      <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer" style={{ color: '#e67728' }}>
        <Link href= "/More_Info"> Free Demo

        </Link>  
      </li>


    </ul>
  </div>
</div>

		</>
      
    )

}