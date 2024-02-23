"use client";
import Footer from '../../components/Footer'
import Navbar from '../../components/Nav'

 
import { useState } from "react";
 
export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    return (
      <section className="w-full h-screen flex flex-col items-center justify-center py-4 md:py-24 lg:py-32">
    <div className="grid grid-cols-2 gap-8">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold dark:text-gray-50 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-500 font-light dark:text-gray-50 text-center">
        Feel free to contact us for any inquiries. We would love to assist you.
      </p>
    </div>
    <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-green-500">
      <h2 className="text-2xl font-bold dark:text-gray-50">
        Feel free to contact us for any inquiries. We would love to assist you 
      </h2>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />
      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
        Email<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

      <label htmlFor="phone" className="text-gray-500 font-light mt-4 dark:text-gray-50">
        Phone number<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        name="phone"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

        
      
      {/* Other input fields go here */}

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
        >
          Submit
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-cyan-500 ml-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</section>

    
	)
}