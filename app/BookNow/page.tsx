'use client'
import React, { useEffect } from "react";
import {InlineWidget} from "react-calendly"


export default function BookNow() {
    return( 
        <>
        <div>
        <InlineWidget url = "https://calendly.com/waypointtechnologies" /> 
        </div>
        </>  
    )
} 