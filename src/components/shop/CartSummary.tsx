
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartSummaryProps {
  totalItems: number;
  isVisible: boolean;
}

export const CartSummary = ({ totalItems, isVisible }: CartSummaryProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {totalItems}
          </span>
        </div>
        <span className="font-semibold">{totalItems} items in cart</span>
        <Link 
          to="/cart"
          className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};
