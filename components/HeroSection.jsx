import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="md:h-[400px] lg:h-[700px] relative bg-gray-100 py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left space-y-8">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Send <span className="text-pink-500">Flowers</span> Like You Mean It
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl">
          Brighten someone’s day with our fresh and beautiful flower collection. Perfect for every occasion.  
        </p>
        <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          src="/flower.jpg"
          width={700}
          height={600}
          alt="Hero image"
          className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[700px] h-auto rounded-xl md:rounded-2xl shadow-lg lg:rotate-2"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
