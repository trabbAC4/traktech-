'use client'

import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import ImageGallery from './components/imagegallery';
import AnimatedNumbers from './components/AnimatedNumbers';
import { FaFlagUsa, FaUserCheck } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { LiaTruckSolid } from "react-icons/lia";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { TbGps } from "react-icons/tb";

// pages/index.tsx

// pages/index.tsx


export default function Home() {
  return (
    <>

      {/* Main Section */}
      <section className="py-20 border-t border-b border-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Take Control of Your Fleet with Navito</h1>
            <p className="text-lg mb-4">Navito offers top-of-the-line tracking solutions designed to streamline your fleet management and optimize operations. We offer unmatched accuracy and efficiency at the best prices in the market.</p>
            <Link href="#book-demo" className="btn-free-demo">
              Book a Demo
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image src="/images/Jumbotron-App-Screenshot.svg" alt="Fleet Tracking Device" width={500} height={400} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image src="/images/eld.png" alt="Fleet Management Features" width={500} height={400} className="rounded-lg" />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="border-l-4 border-orange pl-4 mb-4">
              <h3 className="text-xl font-bold mb-2">ELD Logging</h3>
              <p className="mb-2">Automates compliance with electronic logging device regulations.</p>
              <Link href="#eld-logging" className="text-orange">See How it Works <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <div className="border-l-4 border-orange pl-4 mb-4">
              <h3 className="text-xl font-bold mb-2">IFTA Mileage Tracking</h3>
              <p className="mb-2">Simplifies fuel tax reporting with precise mileage tracking.</p>
              <Link href="#ifta-tracking" className="text-orange">See How it Works <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <div className="border-l-4 border-orange pl-4">
              <h3 className="text-xl font-bold mb-2">Real-Time GPS Tracking</h3>
              <p className="mb-2">Monitors your fleet in real-time with live GPS updates.</p>
              <Link href="#gps-tracking" className="text-orange">See How it Works <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Future-Ready Section */}
      <section className="py-20 future-section">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Future-Ready Fleet Management</h2>
            <h3 className="text-xl mb-4">Leading the Way in Tracking Technology</h3>
            <p className="text-lg">Navito is at the forefront of innovation, offering scalable solutions that grow with your business and ensure unmatched accuracy and efficiency.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image src="/images/Icons/custom-solutions-icon.svg" alt="Custom Solutions Icon" width={50} height={50} />
              </div>
              <h4 className="text-xl font-bold">Custom Solutions</h4>
              <p>We specialize in catering to the unique needs of the trucking and transportation sectors.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image src="/images/Icons/Unmatched-Value-icon.svg" alt="Unmatched Value Icon" width={50} height={50} />
              </div>
              <h4 className="text-xl font-bold">Unmatched Value</h4>
              <p>Get advanced tracking technology without breaking the bank.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image src="/images/Icons/Top-Notch-Support.svg" alt="Top-Notch Support Icon" width={50} height={50} />
              </div>
              <h4 className="text-xl font-bold">Top-Notch Support</h4>
              <p>Our exceptional customer service ensures you get the most out of our products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 feature-section bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Worldwide Visibility, Local Precision</h2>
          <p className="text-lg mb-8">Navito's cutting-edge technology provides comprehensive global tracking capabilities, ensuring your fleet is monitored with pinpoint accuracy anywhere in the world. We offer the following top-tier technology:</p>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="bg-dark-blue text-white p-8 rounded-lg mb-8 lg:mb-0 lg:mr-4">
              <h3 className="text-xl font-bold mb-4">AI 360 View Cameras</h3>
              <hr className="border-orange mb-4" />
              <div className="mb-4">
                <Image src="/images/Icons/Lane-Departure-Warning-icon.svg" alt="Lane Departure Warning Icon" width={40} height={40} className="inline-block mr-3" />
                <div className="inline-block text-left">
                  <h4 className="text-lg font-bold">Lane Departure Warning</h4>
                  <p className="text-sm">Receive alerts when drifting out of your lane.</p>
                </div>
              </div>
              <div className="mb-4">
                <Image src="/images/Icons/Headway-Monitoring-Warning-icon.svg" alt="Headway Monitoring Warning Icon" width={40} height={40} className="inline-block mr-3" />
                <div className="inline-block text-left">
                  <h4 className="text-lg font-bold">Headway Monitoring Warning</h4>
                  <p className="text-sm">Maintain a safe distance from the vehicle ahead.</p>
                </div>
              </div>
              <div>
                <Image src="/images/Icons/Forward-Collision-Warning-icon.svg" alt="Forward Collision Warning Icon" width={40} height={40} className="inline-block mr-3" />
                <div className="inline-block text-left">
                  <h4 className="text-lg font-bold">Forward Collision Warning</h4>
                  <p className="text-sm">Get notified of potential collisions to react promptly.</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-blue text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Driver Monitoring System (DMS)</h3>
              <hr className="border-orange mb-4" />
              <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:mr-4">
                  <Image src="/images/Icons/Fatigue-Detection-icon.svg" alt="Fatigue Detection Icon" width={40} height={40} className="inline-block mr-3" />
                  <div className="inline-block text-left">
                    <h4 className="text-lg font-bold">Fatigue Detection</h4>
                    <p className="text-sm">Recognizes signs of driver tiredness.</p>
                  </div>
                </div>
                <div className="mb-4 md:mr-4">
                  <Image src="/images/Icons/Abnormal-Driving-Alerts-icon.svg" alt="Abnormal Driving Alerts Icon" width={40} height={40} className="inline-block mr-3" />
                  <div className="inline-block text-left">
                    <h4 className="text-lg font-bold">Abnormal Driving Alerts</h4>
                    <p className="text-sm">Notifies of unusual behaviors.</p>
                  </div>
                </div>
                <div className="mb-4 md:mr-4">
                  <Image src="/images/Icons/Safety-Belt-Reminder-icon.svg" alt="Safety Belt Reminder Icon" width={40} height={40} className="inline-block mr-3" />
                  <div className="inline-block text-left">
                    <h4 className="text-lg font-bold">Safety Belt Reminder</h4>
                    <p className="text-sm">Encourages seat belt use.</p>
                  </div>
                </div>
                <div className="mb-4 md:mr-4">
                  <Image src="/images/Icons/Distraction-Monitoring-icon.svg" alt="Distraction Monitoring Icon" width={40} height={40} className="inline-block mr-3" />
                  <div className="inline-block text-left">
                    <h4 className="text-lg font-bold">Distraction Monitoring</h4>
                    <p className="text-sm">Alerts to distractions like phone use.</p>
                  </div>
                </div>
                <div className="mb-4 md:mr-4">
                  <Image src="/images/Icons/Hands-Off-Detection-icon.svg" alt="Hands-Off Detection Icon" width={40} height={40} className="inline-block mr-3" />
                  <div className="inline-block text-left">
                    <h4 className="text-lg font-bold">Hands-Off Detection</h4>
                    <p className="text-sm">Ensures hands are on the wheel for safer driving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 track-record-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Track Record</h2>
          <div className="track-record-row flex flex-wrap justify-center items-stretch gap-4">
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">100<span className="text-orange">%</span></p>
              <p>Products Proudly Made in the USA</p>
            </div>
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">10,000<span className="text-orange">+</span></p>
              <p>Fleets and Vehicles Tracked Worldwide</p>
            </div>
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">90<span className="text-orange">%</span></p>
              <p>Accuracy Rate for Reliable Tracking</p>
            </div>
            <Image src="/images/Our-Track-Record-Image.png" alt="Our Track Record Image" width={500} height={400} className="track-record-image rounded-lg" />
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">95<span className="text-orange">%</span></p>
              <p>Software Reliability</p>
            </div>
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">28<span className="text-orange">+</span></p>
              <p>Specialized Devices to Meet Your Needs</p>
            </div>
            <div className="track-record-item bg-white rounded-lg p-4 text-center shadow-md">
              <p className="text-4xl font-bold mb-0">100,000<span className="text-orange">+</span></p>
              <p>Satisfied Customers Globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 reviews-section bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Satisfied Clients</h2>
          <p className="text-lg mb-8">See how Navito has transformed fleet management for businesses like yours.</p>
          <div className="reviews-container flex flex-wrap justify-between gap-4">
            <div className="review-card bg-white p-6 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-3">
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
              </div>
              <p className="mb-4">"The real-time GPS tracking from Navito has completely transformed our fleet operations. The AI 360 View Cameras provide unparalleled safety. Their customer service is always prompt and helpful. Highly recommend."</p>
              <Image src="/images/RCA-logo.svg" alt="Client Logo" width={100} height={50} className="review-logo mx-auto" />
            </div>
            <div className="review-card bg-white p-6 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-3">
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
              </div>
              <p className="mb-4">"The driver monitoring system, including fatigue detection and distraction monitoring, has significantly improved our safety standards. The support team at Navito is always available and super helpful. We couldn't be happier with the service provided."</p>
              <Image src="/images/RCA-logo.svg" alt="Client Logo" width={100} height={50} className="review-logo mx-auto" />
            </div>
            <div className="review-card bg-white p-6 rounded-lg shadow-md flex-1">
              <div className="flex justify-center mb-3">
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
                <Image src="/images/Icons/star-icon.svg" alt="Star" width={20} height={20} />
              </div>
              <p className="mb-4">"Using Navito's ELD logging feature has kept us compliant effortlessly, and the overall functionality of their system is outstanding. Their tech support is always ready to assist, making the whole experience smooth and stress-free!"</p>
              <Image src="/images/RCA-logo.svg" alt="Client Logo" width={100} height={50} className="review-logo mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section py-20 bg-gray-50">
        <div className="container mx-auto">
          {/* Add your contact section here */}
        </div>
      </section>

    </>
  );
}