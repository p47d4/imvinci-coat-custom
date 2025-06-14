
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { QuoteInfoSections } from '@/components/quote/QuoteInfoSections';

const GetQuote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="pt-20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get Your <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to protect your investment? Get a personalized quote for our premium coating services. 
              Our experts will provide you with the best solution for your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <QuoteForm />
            <QuoteInfoSections />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetQuote;
