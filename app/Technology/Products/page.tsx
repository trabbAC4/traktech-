import Image from 'next/image'
import {useEffect, useState} from 'react';

export default function Product() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(

        <>
            <section className = "w-full h-screen flex flex-col items-center justify-start py-12 lg:py-32 text-white bg-black">
                <section> 
                    <h1> Section off every product here </h1>
                    <h1> Background image with landing strip </h1> 
                </section>

                 <section> 
                    <h1> GPS Tracking </h1>

                    
                 </section>

            <section>
                <h1> ELD Logging </h1>
            </section>

            <section> 

         <div className="flex flex-wrap justify-center lg:justify-between max-w-xl mx-auto">
      <div className="border p-4 lg:w-1/3 w-full mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-2 text-center">Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="border p-4 lg:w-1/3 w-full mb-4 lg:mb-0">
        <h2 className="text-xl font-bold mb-2 text-center">Title 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="border p-4 lg:w-1/3 w-full">
        <h2 className="text-xl font-bold mb-2 text-center">Title 3</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
    </section> 
    </section> 
        
        </>
    )
}