'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Survey from '../components/Survey'
import Image from 'next/image'






export default function More_Info() {
    return (
        <>
        <div className="flex">
  {/* Left side */}
  <div className="w-1/2 bg-gray-200 p-8">
    <h2 className="text-2xl font-bold mb-4">Contact Us for a FREE demo</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
        <input type="text" id="firstName" name="firstName" className="border border-gray-400 rounded-md px-4 py-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
        <input type="text" id="lastName" name="lastName" className="border border-gray-400 rounded-md px-4 py-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company</label>
        <input type="text" id="company" name="company" className="border border-gray-400 rounded-md px-4 py-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea id="message" name="message" rows="4" className="border border-gray-400 rounded-md px-4 py-2 w-full"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="equipment" className="block text-gray-700 font-bold mb-2">Number of Equipment</label>
        <input type="number" id="equipment" name="equipment" min="0" className="border border-gray-400 rounded-md px-4 py-2 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="vehicles" className="block text-gray-700 font-bold mb-2">Number of Vehicles</label>
        <input type="number" id="vehicles" name="vehicles" min="0" className="border border-gray-400 rounded-md px-4 py-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">Submit</button>
    </form>
  </div>
  {/* Right side */}
  <div className="w-1/2 bg-cover bg-center h-screen" style={{backgroundImage: 'url("your-background-image-url.jpg")'}}>
    {/* Content for the right side */}
  </div>
</div>


        </> 
    )
}