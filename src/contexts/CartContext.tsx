
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { CartItem } from '@/types/cart';

interface CartContextType {
  cartItems: CartItem[];
  loading: boolean;
  totalItems: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setCartItems([]);
      setLoading(false);
    }
  }, [user]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cartItems,
    loading,
    totalItems,
    setCartItems,
    setLoading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
