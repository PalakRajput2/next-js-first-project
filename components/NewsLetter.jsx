import React from 'react';

const NewsLetter = () => {
  return (
    <section className="relative  w-full h-[400px] md:h-[550px] bg-[url('/images/friends2.jpg')] bg-contain sm:bg-cover bg-top bg-fixed flex items-center justify-center mt-10 md:mt-0">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative  text-center flex flex-col gap-5 items-center justify-center text-white max-w-xl px-6">
        <h2 className="text-4xl font-medium mb-6">
          Join The Colorful Bunch!
        </h2>

        <div className="flex flex-col sm:flex-row ">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[440px] px-4 py-3 focus:outline-none text-gray-500 bg-white"
          />
          <button className="bg-pink-500 hover:bg-pink-600 cursor-pointer text-white px-6 py-3  transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

    </section>
  );
};

export default NewsLetter;
