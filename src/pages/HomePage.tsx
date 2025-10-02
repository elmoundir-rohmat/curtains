import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { supabase, Product, CartItem } from '../lib/supabase';

interface HomePageProps {
  onBookingClick: () => void;
  onProductsClick: () => void;
  onAddToCart: (item: CartItem) => void;
}

export default function HomePage({ onBookingClick, onProductsClick, onAddToCart }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      // Vérifier si Supabase est configuré
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        console.warn('Supabase non configuré, utilisation de données de démonstration');
        // Données de démonstration pour éviter la page blanche
        setFeaturedProducts([
          {
            id: 'demo-1',
            name: 'Premium Blackout Curtains',
            description: 'Luxury blackout curtains with thermal insulation, perfect for bedrooms.',
            category: 'manual',
            base_price: 450.00,
            price_per_sqm: 75.00,
            image_url: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
            is_featured: true,
            is_bestseller: true,
            stock_status: 'in_stock',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: 'demo-2',
            name: 'Motorized Roller Blinds',
            description: 'Smart motorized blinds with remote control and app integration.',
            category: 'motorized',
            base_price: 850.00,
            price_per_sqm: 142.00,
            image_url: 'https://images.pexels.com/photos/6315812/pexels-photo-6315812.jpeg?auto=compress&cs=tinysrgb&w=800',
            is_featured: true,
            is_bestseller: true,
            stock_status: 'in_stock',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .limit(6);

      if (error) throw error;
      setFeaturedProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
      setError('Erreur lors du chargement des produits');
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

  return (
    <div>
      <Hero onBookingClick={onBookingClick} onProductsClick={onProductsClick} />
      <Features />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our most popular curtains and blinds, loved by customers across Dubai and Abu Dhabi
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={onProductsClick}
              className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-slate-200">
              Book a free home consultation with our design experts today
            </p>
            <button
              onClick={onBookingClick}
              className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium text-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
