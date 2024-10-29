import React from 'react'
import Link from 'next/link';


export default function Footer () {
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
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="ri-dribbble-fill"></i>
            </a>
          </div>
        </div>
        <div className="col">
          <h5 className="mb-4">SERVICES</h5>
          <ul className="space-y-2">
            <li>
              <Link href="/services/software-development">Software Solution Development</Link>
            </li>
            <li>
              <Link href="/services/mobile-development">Mobile Application Development</Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design">UI / UX Designing</Link>
            </li>
            <li>
              <Link href="/services/web-development">Web Design and Development</Link>
            </li>
            <li>
              <Link href="/services/video-content">Video Content Creation</Link>
            </li>
            <li>
              <Link href="/services/graphic-design">Graphic Designing</Link>
            </li>
            <li>
              <Link href="/services/content-management">Content Management</Link>
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
