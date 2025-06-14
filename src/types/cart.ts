
export interface CartItem {
  id: string;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItemWithProduct extends CartItem {
  product: Product;
}
