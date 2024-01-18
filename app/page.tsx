'use client'

import Image from 'next/image'
import Survey from './components/survey';
//import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "next-ui-org/react";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {VStack, Text, Input} from "@chakra-ui/react"
import {useForm} from 'react-hook-form';




export default function Home() {

  const {
    register,
    handleSubmit
  } = useForm(); 

  function submitHandler(data) {
    console.log(data); 
  }
  return (
  <> 
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Navbar />
    <div> 
      <h1 className="text-4xl font-extrabold text-center mt-8">TrakTech</h1>
      <h1 className="text-4xl font-extrabold text-center mt-8">Made entirely in America</h1>
      <button className="bg-white text-black py-2 px-4 rounded mx-auto block">See our prices</button>


    </div>


    <h1 className="text-4xl font-extrabold text-center mt-8"> What we do </h1>
    

    <h1 className="text-4xl font-extrabold text-center mt-8"> Features </h1>

    <h1 className="text-4xl font-extrabold text-center mt-8"> Our pricing plans </h1>


    <h1 className="text-4xl font-extrabold text-center mt-8">What we do </h1>




      <Survey />
    
    <form onSubmit = {handleSubmit(submitHandler)}>
      <Input placeholder = "Enter Name" {...register('name')} />
      <button> Submit! </button>
    </form>

    </main>
    <Footer /> 
    </>
  )
}
