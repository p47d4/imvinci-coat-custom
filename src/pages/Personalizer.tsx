
import React from 'react';
import { Header } from '@/components/Header';
import { CarPersonalizer } from '@/components/CarPersonalizer';
import { Footer } from '@/components/Footer';

const Personalizer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="pt-20">
        <CarPersonalizer />
      </div>
      <Footer />
    </div>
  );
};

export default Personalizer;
