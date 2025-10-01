import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LuxeCurtains</h3>
            <p className="text-slate-300 mb-4">
              Premium curtains and blinds for luxury homes and offices in Dubai and Abu Dhabi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slate-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Book Consultation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blackout Curtains</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Motorized Blinds</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Sheer Curtains</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Wooden Blinds</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Smart Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-slate-300">+971 50 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-slate-300">info@luxecurtains.ae</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-slate-300">Sheikh Zayed Road, Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 LuxeCurtains. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
