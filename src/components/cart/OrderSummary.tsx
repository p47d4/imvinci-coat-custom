
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/pricing';

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
}

export const OrderSummary = ({ subtotal, tax, total }: OrderSummaryProps) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-6 text-red-400">Order Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span className="text-white font-semibold">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">VAT (7.5%)</span>
          <span className="text-white font-semibold">{formatPrice(tax)}</span>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold text-white">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      <Link 
        to="/checkout"
        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mb-4 text-center block"
      >
        Proceed to Checkout
      </Link>
      <Link
        to="/shop"
        className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-full font-semibold transition-colors text-center block"
      >
        Continue Shopping
      </Link>
    </div>
  );
};
