import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
      <>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							WayPoint<span className="text-green-600">Technologies</span>
						</p>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-green-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Newsletter
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-green-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-green-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
					</ul>
				</div>
			</div>
		</>
      
    )

}