import React from 'react';

const Content = () => {
  return (
    <div
      className="h-[300px] w-full bg-cover bg-fixed bg-no-repeat bg-bottom bg-[url('/placeholder3.jpg')] "
    >
      <div className="h-[300px] w-full flex flex-col justify-center items-center  text-black text-center ">
        <p className="text-5xl md:text-6xl font-medium mb-5">Our Flowers</p>
        <p className="text-lg text-gray-500 italic">Our Latest collection of flowers just made by love</p>
      </div>
    </div>
  );
};

export default Content;
