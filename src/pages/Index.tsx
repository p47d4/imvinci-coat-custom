
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { PackagesSection } from '@/components/PackagesSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      {/* <CarPersonalizer /> */}

      <img
            src="/lovable-uploads/imvinci web_20250826_111959_0000.png"
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

      <PackagesSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
