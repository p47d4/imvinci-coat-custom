
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
      <CarPersonalizer />
      <Services />
      <Shop />
      <Footer />
    </div>
  );
};

export default Index;
