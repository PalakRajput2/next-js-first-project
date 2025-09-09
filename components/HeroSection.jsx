import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[600px] relative bg-gray-100 py-16 px-6 md:px-25 flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Send <span className="text-pink-500">Flowers</span> Like You Mean It
        </h1>
        <p className="text-gray-600 text-lg">
          Brighten someone’s day with our fresh and beautiful flower collection. Perfect for every occasion.  
        </p>
        <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <Image
          src="/flower.jpg"
          width={700}
          height={600}
          alt="Hero image"
          className="rounded-2xl shadow-lg rotate-4"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
