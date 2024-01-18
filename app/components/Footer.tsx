export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 fixed w-full bottom-0">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Left Section (Bunch of Text) */}
          <div className="flex-shrink-0">
            <p>About Us | Contact | Terms of Service</p>
            <p>Address: 123 Main St, Cityville</p>
            {/* Add more text as needed */}
          </div>
      
          {/* Middle Section (Company Name) */}
          <div className="flex items-center justify-center">
            <span className="text-lg font-bold">Your Company Name</span>
          </div>
      
          {/* Right Section (Social Media Options) */}
          <div className="flex items-center">
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Add more social media options as needed */}
          </div>
        </div>
      </footer>
      
    )

}