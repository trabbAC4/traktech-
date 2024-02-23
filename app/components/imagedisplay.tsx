import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function ImageDisplay() {
    const items = [
        {
          title: "Item 1",
          image: "/gps.jpg",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet orci et odio finibus, vitae ultricies lorem dictum.",
        },
        {
          title: "Item 2",
          image: "/trucking.jpg",
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        },
        {
          title: "Item 3",
          image: "/trucking.jpg",
          content: "Nullam sed arcu nec mauris mattis semper. Fusce malesuada ex sit amet tellus gravida, id tempus velit tincidunt.",
        },
        {
            title: "Item 1",
            image: "/gps.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet orci et odio finibus, vitae ultricies lorem dictum.",
          },
          {
            title: "Item 2",
            image: "/trucking.jpg",
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          },
          {
            title: "Item 3",
            image: "/trucking.jpg",
            content: "Nullam sed arcu nec mauris mattis semper. Fusce malesuada ex sit amet tellus gravida, id tempus velit tincidunt.",
         } 

        // Add more items as needed
      ];
    return(
   // JSX code to render the grid items
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {/* Grid items */}
          {items.map((item, index) => (
            <div key={index} className="group relative flex items-center justify-center">
              {/* Image */}
              <Image src={item.image} alt={item.title} width={400} height={300} layout="responsive" objectFit="cover" className="rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-50" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold absolute top-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50">{item.title}</h3>
                <div className="absolute inset-0 flex flex-col justify-center">
                  <p>{item.content}</p>
                </div>
                <a href="#" className="underline absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50">See more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }