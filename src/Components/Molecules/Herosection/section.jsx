import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-red-600 h-[80vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Cook, Share & Inspire!
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Join a community of passionate food lovers. Explore, cook, and share your recipes today!
        </p>
        <button className="mt-6 px-8 py-4 bg-yellow-400 text-orange-900 font-semibold rounded-lg shadow hover:bg-yellow-500 hover:scale-105 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
