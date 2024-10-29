import React from 'react'

export default function Contact
() {
  return (
    <div>
        {/* Contact Us Section */}
<section className="py-16 bg-gray-100" id="contact">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-semibold text-black">Contact Us</h1>
      <div className="w-16 h-1 bg-black mx-auto my-4"></div>
      <p className="text-gray-700">
        For inquiries and assistance, feel free to reach out to us.
      </p>
    </div>
    
    <div className="flex justify-center">
      <div className="lg:w-1/2">
        <div className="contact-info">
          <ul className="list-none text-center">
            <li className="mb-2">
              <strong>Phone number (Primary):</strong> +977-XXXXXXXXXX
            </li>
            <li>
              <strong>Email Address:</strong> info@digidraft.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

       

    </div>
  )
}
