
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CartItem } from '@/types/cart';
import { 
  loadCartItems, 
  addItemToCart, 
  updateItemInCart, 
  updateCartItemQuantity, 
  removeCartItem, 
  clearAllCartItems 
} from '@/utils/cartUtils';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const loadCart = async () => {
    if (!user) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const items = await loadCartItems(user.id);
      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart items:', error);
      toast({
        title: "Error",
        description: "Failed to load cart items",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: number) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to add items to cart",
        variant: "destructive",
      });
      return;
    }

    try {
      const existingItem = cartItems.find(item => item.product_id === productId);

      if (existingItem) {
        await updateItemInCart(user.id, existingItem.id, existingItem.quantity);
      } else {
        await addItemToCart(user.id, productId);
      }

      await loadCart();
      
      toast({
        title: "Added to cart",
        description: "Item has been added to your cart",
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (!user) return;

    if (newQuantity <= 0) {
      await removeFromCart(itemId);
      return;
    }

    try {
      await updateCartItemQuantity(user.id, itemId, newQuantity);
      setCartItems(prev => 
        prev.map(item => 
          item.id === itemId 
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast({
        title: "Error",
        description: "Failed to update item quantity",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!user) return;

    try {
      await removeCartItem(user.id, itemId);
      setCartItems(prev => prev.filter(item => item.id !== itemId));
      
      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart",
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      });
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      await clearAllCartItems(user.id);
      setCartItems([]);
      
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart",
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive",
      });
    }
  };

  const migrateLocalStorageCart = async () => {
    if (!user) return;

    try {
      const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (localCart.length === 0) return;

      const itemCounts = localCart.reduce((acc: Record<number, number>, productId: number) => {
        acc[productId] = (acc[productId] || 0) + 1;
        return acc;
      }, {});

      const cartItemsToInsert = Object.entries(itemCounts).map(([productId, quantity]) => ({
        user_id: user.id,
        product_id: parseInt(productId),
        quantity: quantity as number
      }));

      const { error } = await supabase
        .from('cart_items')
        .insert(cartItemsToInsert);

      if (error) throw error;

      localStorage.removeItem('cart');
      await loadCart();

      if (cartItemsToInsert.length > 0) {
        toast({
          title: "Cart migrated",
          description: "Your cart items have been saved to your account",
        });
      }
    } catch (error) {
      console.error('Error migrating cart:', error);
    }
  };

  useEffect(() => {
    if (user) {
      migrateLocalStorageCart();
      loadCart();
    } else {
      setCartItems([]);
      setLoading(false);
    }
  }, [user]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
