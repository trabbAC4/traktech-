import Link from "next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";

import {Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'




export default function SlideShow() {
    const images = [
		"/adobe.jpeg",
		"/skyline.jpeg",
		"/logging.jpg",
		"/meeting.jpeg",
		
	];
	
	const differentheadings = [
		{
			title: "Revolutionize Fleet Management with WayPoint Technologies",
			description: "At Waypoint Technologies, we ensure seamless tracking experiences with exceptional customer support"
		}, 
		{
		title: "The Leaders in Tracking Technology",
		description: "Book a free consultation today"
		},
		{
			title: "We present you the finest new age in technology",
			description: "Book with us and join the new age in tracking devices"
		},
		{
			title: "With the most profound customer service",
			description: "At Waypoint Technologies, we ensure seamless tracking experiences with exceptional customer support"
		},

	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 1000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="w-full h-screen">
  <Zoom {...zoomInProperties}>
    {images.map((each, index) => (
      <div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
        <Image
          src={each}
          alt={`Image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {differentheadings[index] && (
			
          <div className="bg-clip-border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-white">
            {/* Adjust the top-1/2, left-1/2, and transform classes for vertical and horizontal centering */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{differentheadings[index].title}</h1>
            <p className="text-xl md:text-2xl font-bold mb-4">{differentheadings[index].description}</p>
			<div className="flex space-x-4">
			<Link href="/BookNow" className=" shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
        			<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
       				 <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Book a call</span>
      		</Link>
				<Link href="/More_Info" className="shadow-2xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black-600 border-2 border-black-600 rounded-full hover:text-white group hover:bg-gray-50">
       				 <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        			<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            		</span>
                	<span className="relative">Schedule a Demo</span>
     		 </Link>
 			</div>
		  </div>
        )}
      </div>
    ))}
  </Zoom>
</div>


	);
};




