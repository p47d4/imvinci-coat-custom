
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CarPersonalizer } from '@/components/CarPersonalizer';
import { Services } from '@/components/Services';
import { Shop } from '@/components/Shop';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      {/* <CarPersonalizer /> */}

      <img
            src="/lovable-uploads/founders message.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <Services />

      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">Trusted by Owners of Leading Brands</h2>
          <div className="overflow-hidden">
            <div className="flex items-center space-x-8 animate-scroll-logos py-4" style={{
              animation: 'scroll-logos 15s linear infinite'
            }}>
              <img src="/logos/benz-logo.png" alt="Mercedes-Benz" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/ferrari-logo.png" alt="Ferrari" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/audi-logo.png" alt="Audi" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/lambo-logo.png" alt="Lambo" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/aston_martin-logo.png" alt="Aston Martin" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/bmw-logo.png" alt="BMW" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/tesla-logo.png" alt="Tesla" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/bugatti-logo.png" alt="Bugatti" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/LandRover-logo.png" alt="Range Rover" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/porsche-logo.png" alt="porsche" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/BYD-logo.png" alt="BYD" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/lexus-logo.png" alt="Lexus" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/pagani-logo.png" alt="Pagani" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              {/* duplicate for seamless loop */}
              <img src="/logos/benz-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/ferrari-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/audi-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/lambo-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/aston_martin-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/bmw-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/tesla-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/bugatti-logo.png" alt="Bugatti" className="h-16 w-auto grayscale hover:grayscale-0 transition" />
              <img src="/logos/LandRover-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/porsche-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/BYD-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/lexus-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
              <img src="/logos/pagani-logo.png" alt="" className="h-16 w-auto grayscale hover:grayscale-0 transition" aria-hidden="true" />
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes scroll-logos {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-logos {
              min-width: 200%;
              width: max-content;
            }
          `}
        </style>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
