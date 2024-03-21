import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' WayPoint Technologies ',
  description: 'Revolutionize fleet managment with Waypoint Technologies!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer /> 
        </body>
    </html>
  )
}
