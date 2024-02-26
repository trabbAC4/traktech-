import Image from 'next/image'

export default function Technology() {
    return(
        <>
         <h1 className="text-6xl font-extrabold text-center sm:w-2/3 lg:w-1/2 xl:w-1/3 mb-8">
            With a simple click our technology will take care of your needs
         </h1>

        <section className="flex justify-center items-center h-screen">
          <div className="relative">
              <Image
                src="/PhoneDemonstration.png"
                alt="Image"
                width={300} // Adjust width as per your requirement
                height={300} // Adjust height as per your requirement
                 layout="responsive"
                objectFit="contain" // You can adjust objectFit based on your image's aspect ratio
              />
      </div>


        </section> 

        <section className = "bg-gray-800 text-white mb-4">

        </section>

    <section className = "bg-white border-b py-8">
      <div className = "container max-w-5xl mx-auto m-8">
        <h1 className = "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"> Leader in transitional technology</h1>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          ELD Logging 
        </h3> 
        <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
       </div> 
       <div className = "w-full sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
       </div> 
      </div>

      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Placeholder text </h3> 
          <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
          </div>
        </div>
      </div>
      <div className = "flex flex-wrap">
        <div className = "w-5/6 sm:w-1/2 p-6"> 
        <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3">
          ELD Logging 
        </h3> 
        <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
       </div> 
       <div className = "w-full sm:w-1/2 p-6"> 
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
       </div> 
      </div>
      <div className = "flex flex-wrap flex-col-reverse sm:flex-row"> 
        <div className = "w-full sm:w-1/2 p-6 mt-6">
        <Image
          alt="Product Image"
          className="w-full sm:h-64 mx-auto"
          height={300}
          src="/gps.jpg"
          width={300}
        />
        </div>
        <div className = "w-full sm:w-1/2 p-6 mt-6"> 
          <div className = "align-middle"> 
          <h3 className = "text-3xl text-gray-800 font-bold leading-none mb-3"> Placeholder text </h3> 
          <p className = "text-gray-600 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> 
          </div>
        </div>
      </div>

      <section className= "bg-gray-800 mb-4">
          <h1> GPS Tracking </h1> 
      </section>

      <section className= "bg-gray-800 mb-4">
          <h1> GPS Tracking </h1> 
      </section>


      <section className = "bg-gray-800 mb-4"> 
        <h1> Put in like a question and answer portal </h1> 
      </section>




    </section>


        </>
    )
}