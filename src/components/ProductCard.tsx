import { ShoppingCart, Calculator } from 'lucide-react';
import { Product } from '../lib/supabase';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, width: number, height: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [width, setWidth] = useState(2.0);
  const [height, setHeight] = useState(3.0);
  const [showCalculator, setShowCalculator] = useState(false);

  const calculatePrice = () => {
    const area = width * height;
    return (product.price_per_sqm * area).toFixed(2);
  };

  const handleAddToCart = () => {
    onAddToCart(product, width, height);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.is_bestseller && (
          <span className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            Bestseller
          </span>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
          <p className="text-slate-600 text-sm line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Standard Size (2m x 3m)</p>
            <p className="text-2xl font-bold text-slate-900">AED {product.base_price}</p>
          </div>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
            {product.stock_status === 'in_stock' ? 'In Stock' : 'Made to Order'}
          </span>
        </div>

        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className="w-full flex items-center justify-center space-x-2 py-2 text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <Calculator size={18} />
          <span>Custom Size Calculator</span>
        </button>

        {showCalculator && (
          <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Width (m)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Height (m)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-600">Estimated Price</p>
              <p className="text-2xl font-bold text-slate-900">AED {calculatePrice()}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
