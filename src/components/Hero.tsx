
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black/20"></div>
      <div className="absolute inset-0 bg-[url('https://getwallpapers.com/wallpaper/full/3/1/8/1096660-black-car-wallpaper-1920x1080-pictures.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              PROTECTING
            </span>
            <br />
            <span className="text-white">THE WORLD'S FINEST</span>
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Jets, Cars, Yachts and Everything Luxury
            <br />
            <span className="text-red-400">Engineered for excellence. Built for protection.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/packages')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Packages
            </button>
            <button 
              onClick={() => navigate('/personalizer')}
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Check Personalizer
            </button>
          </div>
        </div>
      </div>
      <hr />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-red-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};
