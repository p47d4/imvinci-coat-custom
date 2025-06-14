
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCartContext } from '@/contexts/CartContext';
import { useCartService } from '@/services/cartService';
import { useCartMigration } from '@/services/cartMigrationService';

export const useCart = () => {
  const { user } = useAuth();
  const { cartItems, loading, totalItems, setCartItems, setLoading } = useCartContext();
  
  const {
    loadCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCartService(user, cartItems, setCartItems, setLoading);

  const { migrateLocalStorageCart } = useCartMigration(user, loadCart);

  useEffect(() => {
    if (user) {
      migrateLocalStorageCart();
      loadCart();
    } else {
      setCartItems([]);
      setLoading(false);
    }
  }, [user]);

  return {
    cartItems,
    loading,
    totalItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    loadCartItems: loadCart
  };
};
