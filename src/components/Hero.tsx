
import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              NEXT-GEN
            </span>
            <br />
            <span className="text-blue-900">PROTECTION</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-700 mb-8 leading-relaxed">
            Advanced coating technologies for vehicles and vessels. 
            <br />
            <span className="text-blue-600 font-semibold">Engineered for excellence. Built for protection.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Coatings
            </button>
            <button className="border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};
