
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

      <img
            src="/lovable-uploads/aircraft-hero.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/yatch-hero.png"
            alt="Yatch Services"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/timepiece-hero.png"
            alt="Timepiece services"
            className="w-full h-auto object-cover"
      />

      <Footer />
    </div>
  );
};

export default Index;
