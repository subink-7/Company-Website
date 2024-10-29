import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
 
         <div>
     
     <footer className="bg-black text-white">
  <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col">
          <p className="mb-4">
            From Issuance to Acquiring, Digi Draft Delivers End-to-End Excellence
          </p>
        </div>
        <div className="col">
          <h5 className="mb-4">SERVICES</h5>
          <ul className="space-y-2">
            <li>
              Software Solution Development
            </li>
            <li>
             Mobile Application Development
            </li>
            <li>
             UI / UX Designing
            </li>
            <li>
             Web Design and Development
            </li>
            <li>
            Video Content Creation
            </li>
            <li>
             Graphic Designing
            </li>
            <li>
              Content Management
            </li>
          </ul>
        </div>
        <div className="col">
          <h5 className="mb-4">ABOUT</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h5 className="mb-4">CONTACT</h5>
          <ul className="space-y-2">
            <li>Email: info@digidraft.com</li>
            <li>Phone Number: +977-XXXXXXXXXX</li>
            <li>Address: Your Company Address Here</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <div className="text-center">
          <p className="mb-0">
            © Copyright Digi Draft. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
