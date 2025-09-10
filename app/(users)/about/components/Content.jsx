import React from 'react';

const Content = () => {
  return (
    <div
      className="h-[300px] w-full bg-cover bg-fixed bg-no-repeat bg-bottom bg-[url('/placeholder3.jpg')] "
    >
      <div className="h-[300px] w-full flex flex-col justify-center items-center  text-black text-center">
        <p className="text-6xl font-medium mb-2">About Us</p>
        <p className="text-lg text-gray-500 italic">Where flowers are our inspiration</p>
      </div>
    </div>
  );
};

export default Content;
