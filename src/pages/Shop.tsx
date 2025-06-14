
import React from 'react';
import { Header } from '@/components/Header';
import { Shop } from '@/components/Shop';
import { Footer } from '@/components/Footer';

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="pt-20">
        <Shop />
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
