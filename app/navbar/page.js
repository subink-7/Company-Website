import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>  {/* Navbar */}
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="/" className="hover:text-blue-300">Home</a>
            <a href="/about" className="hover:text-blue-300">About</a>
            <a href="/services" className="hover:text-blue-300">Services</a>
            <a href="/contact" className="hover:text-blue-300">Contact</a>
          </div>
          <div className="flex space-x-4 text-white">
          <Link href="">
          <button className="hover:text-gray-300">Login</button>
          </Link>
          <Link href="">
          <button className="hover:text-gray-300">Signup</button>
          </Link>
         
        </div>
        
          
        
        </div>
      </nav>
    </header></div>
  )
}
