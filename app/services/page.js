import React from 'react'

export default function Service() {
  return (
    <div>
      {/* Our Services */}
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>

      <section id="services" className="py-16 border-t border-gray-300">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {/* Service Items */}
            <div className="service-item" data-aos="fade-down" data-aos-delay="150">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Software Solution Development</h5>
                <p className="line-clamp-5">
                  At Digi Draft, we specialize in delivering innovative and scalable software solutions tailored to meet the unique needs of businesses. Our expertise spans the entire development lifecycle, from requirement analysis and system design to coding, testing, and deployment, ensuring seamless integration and exceptional performance. By leveraging cutting-edge technologies, Agile methodologies, and DevOps practices, we build robust, secure, and future-proof solutions. Whether it's a custom application, cloud-based platform, or enterprise system, we provide end-to-end services to help businesses accelerate their digital transformation and achieve their goals.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="250">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Mobile Application Development</h5>
                <p className="line-clamp-5">
                  We create high-performing, feature-rich mobile applications across platforms to enhance your business capabilities and engagement.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="350">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Web Design and Development</h5>
                <p className="line-clamp-5">
                  Crafting responsive, modern, and functional websites that help businesses establish a strong online presence.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="450">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">UI / UX Designing</h5>
                <p className="line-clamp-5">
                  Designing intuitive, user-friendly interfaces that enhance user experience and boost engagement across platforms.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="550">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Video Content Creation</h5>
                <p className="line-clamp-5">
                  Producing high-quality video content to help brands communicate their stories effectively and engage audiences.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="650">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Graphic Designing</h5>
                <p className="line-clamp-5">
                  Creating visually stunning designs to enhance your brand identity and marketing efforts.
                </p>
              </div>
            </div>

            <div className="service-item" data-aos="fade-down" data-aos-delay="750">
              <div className="service shadow-lg p-5 rounded-lg bg-white hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transform transition duration-300">
                <h5 className="mt-4 mb-3 text-xl font-semibold">Content Management</h5>
                <p className="line-clamp-5">
                  Managing your content effectively with systems that ensure easy updates and consistent brand messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
