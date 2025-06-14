
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const useCartMigration = (user: any, loadCart: () => Promise<void>) => {
  const { toast } = useToast();

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

  return { migrateLocalStorageCart };
};
