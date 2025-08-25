
import React from 'react';
import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <div className="pt-20">

      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">Professional service offerings for your vehicles</p>
        </div>
      </section>
      </div>
      
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
