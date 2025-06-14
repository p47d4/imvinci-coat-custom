
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/types/cart';
import { formatPrice } from '@/utils/pricing';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
