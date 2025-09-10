import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

const Message = () => {
  return (
    <div className="w-full px-6 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left mt-6 lg:mt-15">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-snug text-gray-900">
            We take <span className="text-pink-400 font-medium">flowers</span> personally <br />
            & we bring you happiness
          </h2>

          <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
            ridiculus mus. Donec quam felis, ultricies nec.
          </p>

          {/* Signature Image */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Image
              src="/signature.png"
              alt="Signature"
              width={170}
              height={80}
             style={{ width:"auto" }}
            />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full sm:h-[300px] lg:h-[430px] flex-1">
          <Image
            src="/bg-image.jpg"
            alt="People smiling with flowers"
           width={200} height={200}
            className="object-cover rounded-lg h-[300px] lg:h-[400px] w-full"
            priority
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/" passHref>
              <button
                aria-label="Play video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
              >
                <Play size={32} className="text-pink-500 fill-pink-500" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Message;
