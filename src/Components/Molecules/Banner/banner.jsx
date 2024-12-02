import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_1280.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${images[currentImage]}')`
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/70 to-black-500/70"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Image navigation dots */}
      <div className="absolute bottom-5 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full ${
              currentImage === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to <span className="text-yellow-300">RecipeBlog</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Discover delicious recipes and cooking tips to inspire your kitchen adventures.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-yellow-300 hover:text-white transition duration-300">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Banner;