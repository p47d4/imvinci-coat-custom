
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/20"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              NEXT-GEN
            </span>
            <br />
            <span className="text-white">PROTECTION</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Advanced coating technologies for vehicles and vessels. 
            <br />
            <span className="text-red-400">Engineered for excellence. Built for protection.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Coatings
            </button>
            <button 
              onClick={() => navigate('/personalizer')}
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-red-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};
