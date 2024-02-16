'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Survey from '../components/Survey'






export default function More_Info() {
    return (
        <main>
           <div className="flex flex-col items-center justify-center h-screen">
             <h2 className="text-3xl font-bold border-b-2 border-gray-300 mb-4 pb-2">
                Please place your responses to the following questions so that we can assist you further
             </h2>
                <Survey />
            </div>
        </main>
    )
}