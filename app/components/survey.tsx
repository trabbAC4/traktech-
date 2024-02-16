'use client'

import React from 'react';
import {useState, useEffect} from "react"; 
import Navbar from './Nav';


export default function Survey() {
    const [selectedFields, setSelectedFields] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(1);
    const [first_name, setfirst_name] = useState<string>('');
    const [last_name, setlast_name] = useState<string>('');
    const [submitted, setSubmitted] = useState(false);
    const [progress, setProgress] = useState(0);

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
    if (currentQuestion === 1) {
      setProgress(30); // Update progress to 30% when moving to the next question
    } else if (currentQuestion === 2) {
      setProgress(60); // Update progress to 60% when moving to the next question
    } else if (currentQuestion === 3) {
      setProgress(90); // Update progress to 90% when moving to the next question
    } else if (currentQuestion === 4) {
      setProgress(100); // Update progress to 100% when moving to the next question
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1); 
    if (currentQuestion === 1) {
      setProgress(0); // Update progress to 0% when moving to the first question
    } else if (currentQuestion === 2) {
      setProgress(30); // Update progress to 30% when moving to the previous question
    } else if (currentQuestion === 3) {
      setProgress(60); // Update progress to 60% when moving to the previous question
    } else if (currentQuestion === 4) {
      setProgress(90); // Update progress to 90% when moving to the previous question
    }

  };

  const handleSubmit = () => {
    // Implement submission logic
    // For now, let's just log the entered values
    console.log(`Email: ${email}, Phone Number: ${phoneNumber}`);
    // You can add logic to send the data to the server or perform other actions

    // Display thank you message
    setCurrentQuestion(0); // Reset to the beginning
  };

  const updateProgress = (newProgress: React.SetStateAction<number>) => {
    setProgress(newProgress);
  };




    return(

    <> 
    
    <div className = "border border-gray-300 p-4 w-auto h-auto">

    {submitted && (
            <div className="mt-4 bg-green-200 text-green-800 py-2 px-4 rounded">
              <h1>  Thank you for submitting! </h1>
            </div>
          )}

    <div className="mb-8 w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style= {{width: `${progress}%`}}> {`${progress}%`} </div>
    </div>
    

    {currentQuestion === 1 && (
    <>
        <h2 className="text-center text-2xl font-bold mb-4">Select your vehicle</h2>
        <div className="grid grid-cols-2 gap-4">
            {fields.map((field) => (
                <div key={field} className={`border border-gray-300 rounded-md p-4 flex items-center cursor-pointer ${
                    selectedFields.includes(field) ? 'bg-white text-black' : ''
                    }`}
                     onClick={() => handleFieldChange(field)}>
                    <input
                        type="checkbox"
                        id={field}
                        checked={selectedFields.includes(field)}
                        onChange={() => handleFieldChange(field)}
                        className="mr-2 appearance-none"
                        style={{ width: "1.5em", height: "1.5em", border: "2px solid #4A5568", borderRadius: "4px", marginRight: "0.5em" }}
                        required
                    />
                    <label htmlFor={field}>{field}</label>
                </div>
            ))}
        </div>


          <button
            type="button"
            onClick={handleNextQuestion}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded float-right"
          >
            Next
          </button>
        </>
      )}

      {/* Add other questions here */}

      {/* Example: Second Question */}
      {currentQuestion === 2 && (
        <>
         <h2 className="text-center text-2xl font-bold mb-4">Question 2: Estimated how many products you expect to buy</h2>
          <div className="grid grid-cols-2 gap-4">
            {fields_2.map((field) => (
              <div key={field} className={`border border-gray-300 rounded-md p-4 flex items-center cursor-pointer ${
                selectedFields.includes(field) ? 'bg-white text-black' : ''
              }`}
              onClick = {() => handleFieldChange(field)} >

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
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded float-right"
          >
            Next
          </button>
          <button
              type="button"
              onClick={handlePreviousQuestion}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded float-left"
            >
              Back
          </button>
        </>
      )}
      {currentQuestion === 3 && (
        <>
        <h2 className="text-center text-2xl font-bold mb-4">Question 3: What equipment are you looking for </h2>
         <div className="grid grid-cols-2 gap-4">
           {fields_3.map((field) => (
             <div key={field} className={`border border-gray-300 rounded-md p-4 flex items-center cursor-pointer ${
              selectedFields.includes(field) ? 'bg-white text-black' : ''
            }`}
            onClick = {() => handleFieldChange(field)} >
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
           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded float-right"
         >
           Next
         </button>
         <button
              type="button"
              onClick={handlePreviousQuestion}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded float-left"
            >
              Back
          </button>

       </>

      )}
       {currentQuestion === 4 && (
        <>
          <h2 className="text-2xl font-bold mb-4"> Enter your Email and Phone Number and we will contact you shortly!</h2>
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
            type="button"
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
          {submitted && (
            <div className="mt-4 bg-green-200 text-green-800 py-2 px-4 rounded">
              <h1>  Thank you for submitting! </h1>
            </div>
          )}

        </>
      )}

      

    </div>
    </>


    );
};

