'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'
import Survey from '../components/survey'






export default function More_Info() {
    const makeApiCall = async() => {
        await fetch('/api/hello', {
            method: 'POST',
        })
    }
    return (
        <main>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                 <Survey />
                   
            </div>
            <Footer />
        </main>
    )
}