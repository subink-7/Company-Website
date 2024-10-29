import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-blue-300">Home</Link>
              <Link href="/about" className="hover:text-blue-300">About</Link>
              <Link href="/services" className="hover:text-blue-300">Services</Link>
              <Link href="/contact" className="hover:text-blue-300">Contact</Link>
            </div>
            <div className="flex space-x-4 text-white">
              <Link href="/login" className="hover:text-gray-300">Login</Link>
              <Link href="/signup" className="hover:text-gray-300">Signup</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
