import Image from 'next/image';
import Link from 'next/link';
import it from "@/public/images/IT-Company.jpg";

export default function Home() {
  return (
    <div>
      <main className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center">
        {/* Background Image */}
        <Image
          src={it}
          alt="IT Company"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 text-center mb-16 p-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Empowering Digital Innovation with DIGI DRAFT
          </h1>
          <p className="text-lg mb-8 text-white">
            At DIGI DRAFT, we fuse creativity with technology to craft tailored solutions
            that drive your business forward. Whether it's innovative software, mobile
            apps, stunning designs, or captivating content, we bring your ideas to life.
            Let's transform your digital presence and unlock your full potential.
          </p>
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
