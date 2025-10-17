
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { PackagesSection } from '@/components/PackagesSection';
import { Packages } from './Packages';
import { Footer } from '@/components/Footer';

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

      <Packages />

      <img
            src="/lovable-uploads/imvinci-aboutpagehero.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/imvinci-jetspage1.png"
            alt="Yatch Services"
            className="w-full h-auto object-cover"
      />

       <img
            src="/lovable-uploads/imvinci-jetservices4.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/service-ppf-tinting2.png"
            alt="Yatch Services"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/services-academy-seminar.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/service-carwrap-custom3.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/service-franchising.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <img
            src="/lovable-uploads/service-consultation.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <PackagesSection />
<Services />


       <img
            src="/lovable-uploads/imvinci-contactpage.png"
            alt="IMvinci services hero"
            className="w-full h-auto object-cover"
      />

      <Footer />
    </div>
  );
};

export default Index;
