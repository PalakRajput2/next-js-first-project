import React from 'react';
import Image from 'next/image';

const experts = [
  {
    name: "CRYSTAL BROOKS",
    role: "Florist",
    img: "/images/expert1.jpg", // Use actual image path
  },
  {
    name: "SHIRLEY HARRIS",
    role: "Manager",
    img: "/images/expert2.jpg",
  },
  {
    name: "BEVERLY CLARK",
    role: "Florist",
    img: "/images/expert3.jpg",
  },
  {
    name: "AMANDA WATKINS",
    role: "Florist",
    img: "/images/expert1.jpg",
  },
];

const Experts = () => {
  return (
    <section className="sm:h-[800px] md:h-[760px] gap-10 mt-10 sm:mt-5  lg:mt-0 bg-white flex flex-col justify-center items-center px-6 md:px-20">
      
      {/* Heading */}
      <div className="space-y-6 text-center max-w-2xl">
        <h2 className=" text-4xl md:text-5xl text-black">Flower Experts</h2>
        <p className="text-gray-500 text-lg tracking-wide">
          A perfect blend of creativity, energy, communication, happiness and love.
          Let us  <br /> arrange a smile for you.
        </p>
      </div>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-30  lg:pt-10 justify-items-center">
        {experts.map((expert, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <Image
              src={expert.img}
              width={150}
              height={150}
              alt={expert.name}
              className="size-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover shadow-lg"
            />
            <div className='mb-2 '>
                     <p className="font-semibold uppercase text-gray-800 text-center">{expert.name}</p>
            <p className="text-gray-500 text-center ">{expert.role}</p>
         
            </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
