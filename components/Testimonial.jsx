"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Jasmine White",
        role: "Florist",
        img: "/images/expert1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.",
    },
    {
        name: "Crystal Brooks",
        role: "Florist",
        img: "/images/expert2.jpg",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        name: "Shirley Harris",
        role: "Manager",
        img: "/images/expert3.jpg",
        text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);

    const prevTestimonial = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const nextTestimonial = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <section className="flex flex-col items-center justify-center py-10 md:py-0 bg-white px-5 md:h-[500px]">
            <div className="relative max-w-10xl text-center">


                {/* Navigation Arrows */}
                <div className=" flex justify-center items-center gap-12">
                    <button
                        onClick={prevTestimonial}
                        className=" p-3  text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                        <FaArrowLeft size={24} className="" />
                    </button>
                    <div className="lg:w-[800px]">
                        <Image
                            src={testimonials[current].img}
                            width={120}
                            height={120}
                            alt={testimonials[current].name}
                            className=" rounded-full mx-auto mb-8 size-[130px] object-cover"
                        />
                        <p className="text-xl md:text-2xl italic text-gray-600 mb-8 px-5">
                            “{testimonials[current].text}”
                        </p>

                        {/* Name and Role */}
                        <h3 className="text-xl  mb-1">{testimonials[current].name}</h3>
                        <p className="text-gray-500 mb-6">{testimonials[current].role}</p>

                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="p-3 text-gray-600 hover:text-gray-900 cursor-pointer" 
                    >
                        <FaArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
