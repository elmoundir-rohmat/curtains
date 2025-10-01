import { Calendar, MessageSquare } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
  onProductsClick: () => void;
}

export default function Hero({ onBookingClick, onProductsClick }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transform Your Space with Premium Curtains
              </h1>
              <p className="text-lg sm:text-xl text-slate-600">
                Luxury curtains and blinds for homes and offices in Dubai and Abu Dhabi.
                Professional installation, 12-month warranty, and flexible payment options.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookingClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg shadow-lg"
              >
                <Calendar className="mr-2" size={20} />
                Book Free Consultation
              </button>
              <button
                onClick={onProductsClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium text-lg"
              >
                View Collection
              </button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <MessageSquare className="mr-2" size={18} />
                Chat on WhatsApp
              </a>
              <span className="text-sm text-slate-600">Available 7 days a week</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxury curtains"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
