
import React from 'react';
import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
     
      
          {/* <img
            src="/lovable-uploads/services-hero.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
          /> */}

        <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
