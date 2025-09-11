import React from 'react';
import Image from 'next/image';

const experts = [
  {
    name: "Flower Power",
    desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",
    img: "/images/blog1.jpg",
    date: "27.04.2018",
  },
  {
    name: "Local Florists",
    desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",
    img: "/images/lily.jpg",
    date: "03.05.2018",
  },
  {
    name: "Flower Beauty",
    desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",
    img: "/images/orange.jpg",
    date: "03.05.2018",
  },
];

const Blog = () => {
  return (
    <section className="md:h-[750px] gap-10  lg:mt-0 flex flex-col justify-center items-center px-6 md:px-20 bg-gray-100">
      
      {/* Heading */}
      <div className="flex flex-col justify-center space-y-6 text-center mt-10 md:mt-0 max-w-2xl">
        <h2 className="text-4xl lg:text-5xl text-black">From Our Blog</h2>
        <p className="text-gray-500 text-[20px]">
          A perfect blend of creativity, energy, communication, happiness and love. Let us
          arrange a smile for you.
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-20 lg:pt-10 justify-items-center">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-7 mb-2 md:mb-0 relative">
            
            {/* Date Badge */}
            <div className="absolute top-3  md:left-7 bg-white text-black text-sm px-3 py-1 font-semibold shadow-md z-10 transition-transform duration-500 hover:scale-110 hover:text-pink-400 cursor-pointer">
              {expert.date}
            </div>

            {/* Image */}
            <Image
              src={expert.img}
              width={150}
              height={150}
              alt={expert.name}
              className="size-[250px] md:w-[400px] md:h-[250px] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer shadow-lg"
            />

            {/* Text Info */}
            <div className="flex flex-col gap-3 text-center mb-5 ">
              <p className="font-medium text-gray-900 text-[22px]">{expert.name}</p>
              <p className="text-gray-500 text-[20px]">{expert.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
