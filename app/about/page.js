import React from 'react'
import why from "@/public/images/why-ejm.jpg"
import Image from 'next/image'

export default function Aboutus() {
  return (
    <div>
      {/* About Us */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-down" data-aos-delay="50">
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">
              At DIGI DRAFT, we're a dynamic startup blending cutting-edge technology with creative brilliance. From software development to stunning designs and engaging content, we’re committed to delivering tailored solutions that fit your business needs. Our team of experts is passionate about pushing boundaries and helping your brand thrive in the digital landscape.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start">
            {/* Image Container */}
            <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-down" data-aos-delay="50">
              <Image
                src={why}
                alt="Product Image"
                layout="responsive"
                width={500}
                height={1000}  
                quality={100}
                className="w-full h-[800px] object-cover mb-4 rounded-lg" 
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 md:pl-8" data-aos="fade-down" data-aos-delay="150">
              <h2 className="text-2xl font-semibold mb-4">Why DIGI DRAFT?</h2>
              <p className="text-gray-600 mb-6">
                Choose Fintech Solutions for cutting-edge payment products and tailored solutions supported by strategic partnerships and innovative approaches.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start">
                  <div className="text-blue-500 text-3xl mr-4">
                    <i className="ri-mail-send-fill"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">Custom-Fit Solutions</h5>
                    <p>
                      At DIGI DRAFT, we don't offer one-size-fits-all services. Each solution is crafted specifically to meet your business goals, ensuring precision and effectiveness.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start">
                  <div className="text-blue-500 text-3xl mr-4">
                    <i className="ri-user-5-fill"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">Multidisciplinary Expertise</h5>
                    <p>
                      Our team combines technical prowess and creative thinking, offering a wide range of services from software development to digital content creation, all under one roof.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start">
                  <div className="text-blue-500 text-3xl mr-4">
                    <i className="ri-rocket-2-fill"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold">Collaborative Partnership</h5>
                    <p>
                      We believe in building long-term partnerships by aligning our success with yours. We work closely with you every step of the way to ensure your vision becomes reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
