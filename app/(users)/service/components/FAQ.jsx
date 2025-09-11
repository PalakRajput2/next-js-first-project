"use client";

import React, { useRef } from 'react';

const faqItems = [
  {
    id: "faq1",
    question: "Creating messages of magnificence.",
    answer: "Class aptent taciti sociosqu ad litora torquent per Class aptent taciti sociosqu ad litora torquent pe conubia nostra vClass aptent taciti sociosqu ad litora torquent per conubia nostra..."
  },
  {
    id: "faq2",
    question: "Always making beautiful flowers.",
    answer: "Sed ut imperdiet nisi. Proin condimentum fermentum Class aptent taciti sociosqu ad litora torquent pe nuncClass aptent taciti sociosqu ad litora torquent per conubia nostra..."
  },
  {
    id: "faq3",
    question: "Made for all of life’s celebrations.",
    answer: "Etiam aretra, Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet vNunc non neque elit. Proin gravida nibh vel velit auctor aliquet erat sed fermentum feugiat, Class aptent taciti sociosqu ad litora Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet torquent pe velit mauris eg Class aptent taciti sociosqu ad litora torquent per conubia nostra vestas..."
  },
  {
    id: "faq4",
    question: "Shouldn’t your flowers be unique too?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Class aptent taciti sociosqu ad litora torquent Class aptent taciti sociosqu Class aptent taciti sociosqu ad litora torquent pe Class aptent taciti sociosqu ad litora torquent peClass aptent taciti sociosqu ad litora torquent pe  ad litora torquent pe pe Class aptent taciti sociosqu ad litora torquent pe vNunc non neque elit. Proin gravida nibh vel velit auctor aliquet..."
  },
  {
    id: "faq5",
    question: "We create emotions.",
    answer: "Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet Nunc non neque elit. Proin gravida nibh vel velit auctor aliquet Nunc non neque elit. Proin gravida nibh vel velit auctor aliquetNunc non neque elit. Proin gravida nibh vel velit auctor aliquet Nunc non neque elit. Proin gravida nibh vel velit auctor aliquetNunc non neque elit. Proin gravida nibh vel velit auctor aliquet..."
  },
];

const FAQ = () => {
  const refs = useRef({});

  const scrollToSection = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-20 py-10 md:py-30 bg-white md:gap-20">
      
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 mb-10 md:mb-0">
        <h2 className="text-xl font-semibold mb-4 uppercase text-center md:text-left text-gray-800">Frequently Asked Questions</h2>
        <ul className="space-y-3">
          {faqItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer text-gray-600 hover:text-pink-500 transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.question}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="w-full  md:w-2/3 space-y-12">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (refs.current[item.id] = el)}
            className="scroll-mt-20"
          >
            <h3 className=" flex lg:items-center  text-2xl mb-4">
              <span className="text-pink-500 mr-2  font-semibold">{String(index + 1).padStart(2, '0')}.</span>
             <p className='  text-xl md:text-2xl lg:text-3xl '> {item.question}</p>
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
