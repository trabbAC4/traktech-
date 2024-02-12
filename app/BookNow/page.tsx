'use client'
import React, { useEffect } from "react";
import Booking from '../components/Calender'

export default function BookNow() {
    return( 
        <div>
            <h1>Schedule an Appointment</h1>
            <Booking url="https://calendly.com/waypointtechnologies/30min" />
      </div>
    )
} 