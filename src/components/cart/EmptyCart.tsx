
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-400 mb-4">Your cart is empty</h2>
      <p className="text-gray-500 mb-8">Add some products to get started</p>
      <Link
        to="/shop"
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
      >
        Continue Shopping
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
