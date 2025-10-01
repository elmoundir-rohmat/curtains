import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { supabase, Product, CartItem } from '../lib/supabase';
import { Filter } from 'lucide-react';

interface ProductsPageProps {
  onAddToCart: (item: CartItem) => void;
}

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  const loadProducts = async () => {
    try {
      let query = supabase.from('products').select('*');

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product, width: number, height: number) => {
    const area = width * height;
    const price = product.price_per_sqm * area;

    onAddToCart({
      product,
      width,
      height,
      quantity: 1,
      price
    });
  };

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'manual', label: 'Manual Curtains' },
    { value: 'motorized', label: 'Motorized Systems' },
    { value: 'accessories', label: 'Accessories' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Collection</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our extensive range of premium curtains and blinds
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-slate-600" />
            <span className="font-medium text-slate-900">Filter by Category</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
