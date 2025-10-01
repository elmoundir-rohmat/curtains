import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  base_price: number;
  price_per_sqm: number;
  image_url: string;
  is_featured: boolean;
  is_bestseller: boolean;
  stock_status: string;
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
}

export interface CartItem {
  product: Product;
  width: number;
  height: number;
  quantity: number;
  price: number;
}

export interface OrderData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  items: CartItem[];
  payment_method: string;
  notes?: string;
}

export interface QuoteRequest {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  product_interest: string;
  requirements?: string;
}
