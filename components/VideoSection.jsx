import Image from "next/image";
import { Play, Heart } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="md:h-[650px] bg-gray-100 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Image with Play Button */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          src="/bg-image.jpg"
          width={120}
          height={110}
          alt="Image"
     
          className="w-[700px] h-[430px]"
        />
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-25 h-25 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
            <Play size={46} className="text-pink-500 fill-pink-500 cursor-pointer" />
          </div>
        </button>
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 space-y-7 ml-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  text-gray-800 leading-snug">
          Surprise Your <span className="text-pink-500">Loved Ones!</span>
             <br></br>      Let us arrange a smile.
        </h2>

        <p className="text-gray-500 leading-relaxed text-xl">
          Where flowers are our inspiration to create lasting memories.
          <br></br>    Whatever the occasion...
        </p>

        {/* Features List */}
        <ul className="space-y-4 text-gray-500 text-xl">
          <li className="flex items-center gap-3">
            <Heart size={20} className="text-pink-500 fill-pink-500" />
            Hand picked just for you.
          </li>
          <li className="flex items-center gap-3">
            <Heart size={20} className="text-pink-500 fill-pink-500" />
            Unique flower arrangements
          </li>
          <li className="flex items-center gap-3">
            <Heart size={20} className="text-pink-500 fill-pink-500" />
            Best way to say you care.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VideoSection;
