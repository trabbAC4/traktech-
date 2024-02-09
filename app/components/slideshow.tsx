import Link from "next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";

import {Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'


export default function SlideShow() {
    const images = [
		"/customerservice.jpg",
		"/IFTA.jpg",
		"/customerservice.jpg",
		"/customerservice.jpg",
		
	];
	
	const differentheadings = [
		{
			title: "Revolutionize Fleet Management with [Techologies]",
			description: "Empowering your Business with Innovative Hardware and Software Solutions"
		}, 
		{
		title: "The Leaders in Tracking Technology",
		description: "Book a free consultation today"
		},
		{
			title: "We present you the finest new age in technology",
			description: "Book with us and join the new age in tracking devices"
		},

	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
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
							alt= {`Image $(index+1)`}
							layout = "fill"
							objectFit = "cover"
							quality= {100}
						/>
                         {differentheadings[index] && (
          					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
            				<h1 className="text-blacktext-4xl md:text-6xl font-bold">{differentheadings[index].title}</h1>
            				<p className="text-xl md:text-2xl font-bold mt-4">{differentheadings[index].description}</p>
          					</div>
  						)}
					</div>
				))}
			</Zoom>
		</div>
	);
};




