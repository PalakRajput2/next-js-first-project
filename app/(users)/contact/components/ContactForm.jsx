import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Side */}
        <div className="bg-gray-50 p-6 h-full flex flex-col justify-center items-center text-center">
          <img
            src="/images/expert1.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full mb-6 object-cover"
          />

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
            We take <span className="text-pink-500">flowers</span> personally,
            <br /> with your thoughts in hand...
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amfsfsfset, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec.
          </p>
          <div className="mt-6">
            <Image
              src="/images/signature.png"
              height={100}
              width={100}
              alt="Signature"
            />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="shadow-md p-8 rounded-lg h-full flex flex-col justify-center">
          <h3 className="md:text-5xl font-light mb-2">Get in Touch!</h3>
          <p className="text-gray-500 mb-6">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            Maurisdssf in erat justullam ac urna eu felis dapib
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name..."
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              placeholder="Write something..."
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
