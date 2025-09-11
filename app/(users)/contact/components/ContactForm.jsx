"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidationSchema } from "../validation/ContactValidation"; // Adjust path as needed

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactValidationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Clear form
  };

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="mt-6">
            <Image
              src="/signature.png"
              height={100}
              width={150}
              alt="Signature"
            />
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-6 h-full flex flex-col justify-center">
          <h3 className="text-4xl text-center md:text-5xl text-black font-light mb-5">Get in Touch!</h3>
          <p className="text-gray-500 text-center mb-6">
            Let’s talk! Fill the form and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("fullName")}
                placeholder="Your Full Name..."
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Phone"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Write something..."
                rows="4"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-md font-semibold transition"
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
