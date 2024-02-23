import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function imagedisplay() {
    return(
     <section className="bg-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Square div 1 */}
        <div className="relative overflow-hidden group">
          <div className="bg-cover bg-center w-full h-0 pb-full filter blur opacity-70 transition-opacity duration-300 group-hover:opacity-100" style={{backgroundImage: 'url("image1.jpg")'}}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 className="text-2xl font-bold mb-2">Title 1</h2>
            <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus, turpis nec dignissim interdum, turpis nisi fermentum neque.</p>
            <a href="#" className="underline mt-2">See more</a>
          </div>
        </div>
        
        {/* Square div 2 */}
        <div className="relative overflow-hidden group">
          <div className="bg-cover bg-center w-full h-0 pb-full filter blur opacity-70 transition-opacity duration-300 group-hover:opacity-100" style={{backgroundImage: 'url("image2.jpg")'}}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h2 className="text-2xl font-bold mb-2">Title 2</h2>
            <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus, turpis nec dignissim interdum, turpis nisi fermentum neque.</p>
            <a href="#" className="underline mt-2">See more</a>
          </div>
        </div>
        
        {/* Repeat similar structure for the remaining divs */}
        {/* Square div 3 */}
        {/* Square div 4 */}
        {/* Square div 5 */}
        {/* Square div 6 */}
      </div>
    </section>

    )
}