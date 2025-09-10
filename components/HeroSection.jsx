'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/lily.jpg',
  '/images/yellow_flower.jpg',
  '/images/orange.jpg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <section className="font-play md:h-[400px] lg:h-[700px] relative bg-gray-100 py-10 px-8 md:px-12 lg:px-23 flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-4 md:space-y-8">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Send <span className="text-pink-500">Flowers</span> Like You Mean It
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl">
          Brighten someone’s day with our fresh and beautiful flower collection. Perfect for every occasion.  
        </p>
        <button className="mt-4 w-40 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>

     
      <div className="mt-10 md:pr-20 md:mt-0 md:ml-10 flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          src={images[currentIndex]}
          width={400}
          height={400}
          alt={`Hero image ${currentIndex + 1}`}
          className="w-[250px] sm:w-[350px] md:w-[440px] h-[300px] md:h-[350px] lg:h-[500px] rounded-xl md:rounded-2xl shadow-lg transform lg:rotate-10 transition-transform duration-800"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
