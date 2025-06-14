
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const calculateSubtotal = (items: Array<{ price: number; quantity: number }>) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const calculateTax = (subtotal: number, rate = 0.075) => {
  return subtotal * rate;
};

export const calculateTotal = (subtotal: number, tax: number) => {
  return subtotal + tax;
};
