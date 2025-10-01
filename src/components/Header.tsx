import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

export default function Header({ cartCount, onCartClick, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="text-2xl font-bold text-slate-800">
              LuxeCurtains
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => onNavigate('home')} className="text-slate-700 hover:text-slate-900 font-medium">
              Home
            </button>
            <button onClick={() => onNavigate('products')} className="text-slate-700 hover:text-slate-900 font-medium">
              Products
            </button>
            <button onClick={() => onNavigate('booking')} className="text-slate-700 hover:text-slate-900 font-medium">
              Book Consultation
            </button>
            <button onClick={() => onNavigate('contact')} className="text-slate-700 hover:text-slate-900 font-medium">
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-green-600 hover:text-green-700"
            >
              <Phone size={20} />
              <span className="font-medium">WhatsApp</span>
            </a>

            <button
              onClick={onCartClick}
              className="relative p-2 text-slate-700 hover:text-slate-900"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Book Consultation
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Contact
            </button>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-2 text-green-600 hover:text-green-700 font-medium"
            >
              <Phone size={20} />
              <span>WhatsApp Support</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
