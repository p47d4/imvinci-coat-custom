
import { supabase } from '@/integrations/supabase/client';
import { CartItem } from '@/types/cart';

export const loadCartItems = async (userId: string): Promise<CartItem[]> => {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const addItemToCart = async (userId: string, productId: number): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .insert([{
      user_id: userId,
      product_id: productId,
      quantity: 1
    }]);

  if (error) throw error;
};

export const updateItemInCart = async (userId: string, itemId: string, existingQuantity: number): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .update({ 
      quantity: existingQuantity + 1,
      updated_at: new Date().toISOString()
    })
    .eq('id', itemId)
    .eq('user_id', userId);

  if (error) throw error;
};

export const updateCartItemQuantity = async (userId: string, itemId: string, quantity: number): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .update({ 
      quantity,
      updated_at: new Date().toISOString()
    })
    .eq('id', itemId)
    .eq('user_id', userId);

  if (error) throw error;
};

export const removeCartItem = async (userId: string, itemId: string): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', itemId)
    .eq('user_id', userId);

  if (error) throw error;
};

export const clearAllCartItems = async (userId: string): Promise<void> => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('user_id', userId);

  if (error) throw error;
};
