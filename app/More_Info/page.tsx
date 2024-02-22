'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Survey from '../components/Survey'
import Image from 'next/image'






export default function More_Info() {
    return (
        <>
         <div className = "gap-8 columns-2">
            <div className = "col-span-1"> Testing </div>

            <div className = "col-span-4 w-full h-full"> 
                <Image 
                    src= "/trucking.jpg"
                    height=  {300}
                    width = {300}
                    alt = "truck picture"
                /> 

            
            </div>
         </div>
        </> 
    )
}