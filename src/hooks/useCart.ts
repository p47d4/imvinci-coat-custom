
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Load cart items from database
  const loadCartItems = async () => {
    if (!user) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCartItems(data || []);
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

  // Add item to cart
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
      // Check if item already exists in cart
      const existingItem = cartItems.find(item => item.product_id === productId);

      if (existingItem) {
        // Update quantity
        const { error } = await supabase
          .from('cart_items')
          .update({ 
            quantity: existingItem.quantity + 1,
            updated_at: new Date().toISOString()
          })
          .eq('id', existingItem.id)
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart_items')
          .insert([{
            user_id: user.id,
            product_id: productId,
            quantity: 1
          }]);

        if (error) throw error;
      }

      // Reload cart items
      await loadCartItems();
      
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

  // Update item quantity
  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (!user) return;

    if (newQuantity <= 0) {
      await removeFromCart(itemId);
      return;
    }

    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ 
          quantity: newQuantity,
          updated_at: new Date().toISOString()
        })
        .eq('id', itemId)
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Update local state
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

  // Remove item from cart
  const removeFromCart = async (itemId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId)
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Update local state
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

  // Clear cart
  const clearCart = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;
      
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

  // Migrate localStorage cart to database (call this once when user logs in)
  const migrateLocalStorageCart = async () => {
    if (!user) return;

    try {
      const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (localCart.length === 0) return;

      // Count quantity of each product
      const itemCounts = localCart.reduce((acc: Record<number, number>, productId: number) => {
        acc[productId] = (acc[productId] || 0) + 1;
        return acc;
      }, {});

      // Insert items into database
      const cartItemsToInsert = Object.entries(itemCounts).map(([productId, quantity]) => ({
        user_id: user.id,
        product_id: parseInt(productId),
        quantity: quantity as number
      }));

      const { error } = await supabase
        .from('cart_items')
        .insert(cartItemsToInsert);

      if (error) throw error;

      // Clear localStorage
      localStorage.removeItem('cart');
      
      // Reload cart items
      await loadCartItems();

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
      loadCartItems();
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
    loadCartItems
  };
};
