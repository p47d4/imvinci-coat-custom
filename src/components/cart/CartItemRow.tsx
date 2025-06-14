
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItemWithProduct } from '@/types/cart';
import { formatPrice } from '@/utils/pricing';

interface CartItemRowProps {
  item: CartItemWithProduct;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

export const CartItemRow = ({ item, onUpdateQuantity, onRemove }: CartItemRowProps) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-700/30 rounded-lg p-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-white">{item.product.name}</h3>
        <p className="text-gray-400">{formatPrice(item.product.price)}</p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-600 rounded-full transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="text-right">
        <p className="font-bold text-white">{formatPrice(item.product.price * item.quantity)}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 hover:bg-red-600 rounded-full transition-colors text-red-400 hover:text-white"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};
