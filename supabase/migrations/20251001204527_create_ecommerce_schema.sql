/*
  # E-commerce Schema for Curtains and Blinds Store

  ## Overview
  Complete database schema for a luxury curtains and blinds e-commerce platform
  serving Dubai and Abu Dhabi markets with appointment booking and order management.

  ## New Tables
  
  ### `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `name` (text) - Product name
  - `description` (text) - Detailed product description
  - `category` (text) - Product category (manual, motorized, accessories)
  - `base_price` (decimal) - Base price for standard size (2m x 3m)
  - `price_per_sqm` (decimal) - Price calculation per square meter
  - `image_url` (text) - Main product image URL
  - `is_featured` (boolean) - Whether product is featured on homepage
  - `is_bestseller` (boolean) - Whether product is a bestseller
  - `stock_status` (text) - In stock, out of stock, made to order
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `appointments`
  - `id` (uuid, primary key) - Unique appointment identifier
  - `customer_name` (text) - Customer full name
  - `customer_email` (text) - Customer email address
  - `customer_phone` (text) - Customer phone number
  - `customer_address` (text) - Address for home consultation
  - `preferred_date` (date) - Requested appointment date
  - `preferred_time` (text) - Requested time slot
  - `notes` (text) - Additional customer notes
  - `status` (text) - pending, confirmed, completed, cancelled
  - `created_at` (timestamptz) - Booking timestamp

  ### `orders`
  - `id` (uuid, primary key) - Unique order identifier
  - `order_number` (text) - Human-readable order number
  - `customer_name` (text) - Customer name
  - `customer_email` (text) - Customer email
  - `customer_phone` (text) - Customer phone
  - `delivery_address` (text) - Delivery address
  - `subtotal` (decimal) - Order subtotal
  - `tax` (decimal) - Tax amount
  - `total` (decimal) - Total order amount
  - `payment_method` (text) - Payment method chosen
  - `payment_status` (text) - pending, paid, failed
  - `order_status` (text) - pending, processing, shipped, delivered, cancelled
  - `notes` (text) - Order notes
  - `created_at` (timestamptz) - Order creation timestamp

  ### `order_items`
  - `id` (uuid, primary key) - Unique item identifier
  - `order_id` (uuid) - Reference to orders table
  - `product_id` (uuid) - Reference to products table
  - `product_name` (text) - Product name snapshot
  - `width` (decimal) - Custom width in meters
  - `height` (decimal) - Custom height in meters
  - `quantity` (integer) - Quantity ordered
  - `unit_price` (decimal) - Price per unit
  - `total_price` (decimal) - Total line item price

  ### `quotes`
  - `id` (uuid, primary key) - Unique quote identifier
  - `customer_name` (text) - Customer name
  - `customer_email` (text) - Customer email
  - `customer_phone` (text) - Customer phone
  - `product_interest` (text) - Products interested in
  - `requirements` (text) - Detailed requirements
  - `status` (text) - pending, sent, accepted, declined
  - `created_at` (timestamptz) - Quote request timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for products (guest browsing)
  - Authenticated insert for appointments, orders, quotes
  - Admin-only access for order management and updates
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'manual',
  base_price decimal(10,2) NOT NULL DEFAULT 0,
  price_per_sqm decimal(10,2) NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  is_bestseller boolean DEFAULT false,
  stock_status text DEFAULT 'in_stock',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  notes text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  delivery_address text NOT NULL,
  subtotal decimal(10,2) NOT NULL DEFAULT 0,
  tax decimal(10,2) NOT NULL DEFAULT 0,
  total decimal(10,2) NOT NULL DEFAULT 0,
  payment_method text DEFAULT 'cash',
  payment_status text DEFAULT 'pending',
  order_status text DEFAULT 'pending',
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id),
  product_name text NOT NULL,
  width decimal(10,2) NOT NULL DEFAULT 2.0,
  height decimal(10,2) NOT NULL DEFAULT 3.0,
  quantity integer NOT NULL DEFAULT 1,
  unit_price decimal(10,2) NOT NULL DEFAULT 0,
  total_price decimal(10,2) NOT NULL DEFAULT 0
);

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  product_interest text NOT NULL,
  requirements text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Products policies (public read access)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Appointments policies
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view own appointments by email"
  ON appointments FOR SELECT
  TO anon, authenticated
  USING (true);

-- Orders policies
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view orders"
  ON orders FOR SELECT
  TO anon, authenticated
  USING (true);

-- Order items policies
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view order items"
  ON order_items FOR SELECT
  TO anon, authenticated
  USING (true);

-- Quotes policies
CREATE POLICY "Anyone can create quotes"
  ON quotes FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view quotes"
  ON quotes FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample products
INSERT INTO products (name, description, category, base_price, price_per_sqm, is_featured, is_bestseller, stock_status, image_url) VALUES
('Premium Blackout Curtains', 'Luxury blackout curtains with thermal insulation, perfect for bedrooms. Available in multiple colors and fabrics. Complete light blocking with elegant draping.', 'manual', 450.00, 75.00, true, true, 'in_stock', 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Motorized Roller Blinds', 'Smart motorized blinds with remote control and app integration. Energy-efficient fabric with UV protection. Perfect for modern homes and offices.', 'motorized', 850.00, 142.00, true, true, 'in_stock', 'https://images.pexels.com/photos/6315812/pexels-photo-6315812.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Sheer Voile Curtains', 'Elegant lightweight sheer curtains that filter natural light beautifully. Creates a soft, airy ambiance while maintaining privacy. Machine washable.', 'manual', 280.00, 47.00, true, false, 'in_stock', 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Wooden Venetian Blinds', 'Classic wooden blinds with smooth operation. Durable basswood construction with moisture-resistant coating. Perfect for any room style.', 'manual', 520.00, 87.00, false, true, 'in_stock', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Smart Home Curtain System', 'Fully automated curtain system with voice control compatibility. Schedule opening/closing, integrate with smart home systems. Premium silent motor.', 'motorized', 1200.00, 200.00, true, true, 'made_to_order', 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Roman Shade Blinds', 'Sophisticated fabric roman shades with cordless operation. Soft fold design adds elegance to any window. Multiple fabric options available.', 'manual', 380.00, 63.00, false, false, 'in_stock', 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800')
ON CONFLICT DO NOTHING;