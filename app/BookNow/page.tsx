'use client'
import React, { useEffect } from "react";
import Calender from '../components/Calender'


export default function BookNow() {
    return( 
        <div className="container">
      <h1>Schedule an Appointment</h1>
            <Calender url="https://calendly.com/waypointtechnologies" />
            </div>
    )
} 