'use client'

import React from 'react';
import {useState, useEffect} from "react"; 
import Navbar from '../components/Navbar';


export default function survey() {
    const [selectedFields, setSelectedFields] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const [first_name, setfirst_name] = useState<string>('');
    const [last_name, setlast_name] = useState<string>('');

    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const fields = ['fleets', 'equipment', 'cars']; // Add more fields as needed
    const fields_2 = ['1-3', '5-10', '10-50', 'more than 100']
    const fields_3 = ['GPS', 'Tracker', 'Hardware'] 


    const handleFieldChange = (field: string) => {
    const updatedFields = selectedFields.includes(field)
      ? selectedFields.filter((selectedField) => selectedField !== field)
      : [...selectedFields, field];
    setSelectedFields(updatedFields);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    // Add logic to handle other questions
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1); 
  };

  const handleSubmit = async (e: FormEvent<HtmlFormElement>) => {
    e.preventDefault();


    const form = {
      first_name,
      last_name,
      email, 
      phoneNumber, 
      

    }
    // Implement submission logic
    // For now, let's just log the entered values
    console.log(form) 
    console.log(`First Name: ${first_name}`, `Last Name: ${last_name}`)
    console.log(`Email: ${email}, Phone Number: ${phoneNumber}`);
    // You can add logic to send the data to the server or perform other actions

    // Display thank you message
    setCurrentQuestion(0); // Reset to the beginning
  };



    return(
    <div>
      {currentQuestion === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Question 1: Select Fields</h2>
          <div className="space-y-2">
            {fields.map((field) => (
              <div key={field} className="flex items-center">
                <input
                  type="checkbox"
                  id={field}
                  checked={selectedFields.includes(field)}
                  onChange={() => handleFieldChange(field)}
                  className="mr-2"
                />
                <label htmlFor={field}>{field}</label>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNextQuestion}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </>
      )}

      {/* Add other questions here */}

      {/* Example: Second Question */}
      {currentQuestion === 2 && (
        <>
         <h2 className="text-2xl font-bold mb-4">Question 2: Estimated how many</h2>
          <div className="space-y-2">
            {fields_2.map((field) => (
              <div key={field} className="flex items-center">
                <input
                  type="checkbox"
                  id={field}
                  checked={selectedFields.includes(field)}
                  onChange={() => handleFieldChange(field)}
                  className="mr-2"
                />
                <label htmlFor={field}>{field}</label>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleNextQuestion}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
          <button
              type="button"
              onClick={handlePreviousQuestion}
              className="mr-4 bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
          </button>
        </>
      )}
      {currentQuestion === 3 && (
        <>
        <h2 className="text-2xl font-bold mb-4">Question 3: What equipment do you want </h2>
         <div className="space-y-2">
           {fields_3.map((field) => (
             <div key={field} className="flex items-center">
               <input
                 type="checkbox"
                 id={field}
                 checked={selectedFields.includes(field)}
                 onChange={() => handleFieldChange(field)}
                 className="mr-2"
               />
               <label htmlFor={field}>{field}</label>
             </div>
           ))}
         </div>
         <button
           type="button"
           onClick={handleNextQuestion}
           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
         >
           Next
         </button>
         <button
              type="button"
              onClick={handlePreviousQuestion}
              className="mr-4 bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
          </button>

       </>

      )}
       {currentQuestion === 4 && (
        <>
          <h2 className="text-2xl font-bold mb-4"> Enter Email and Phone Number</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-black-700">
                First Name 
              </label>
              <input
                type="f_name"
                id="f_name"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-black-700">
                Last Name 
              </label>
              <input
                type="l_name"
                id="l_name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-black-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>

        </>
      )}

      

    </div>


    );
};

