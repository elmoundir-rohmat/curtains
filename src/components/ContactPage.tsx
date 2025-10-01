import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We're here to help you find the perfect window treatments for your space
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 text-white rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600">+971 50 123 4567</p>
                  <p className="text-slate-600">+971 4 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">info@luxecurtains.ae</p>
                  <p className="text-slate-600">support@luxecurtains.ae</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Showroom</h3>
                  <p className="text-slate-600">
                    Sheikh Zayed Road, Trade Centre<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-900 text-white rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Saturday - Thursday: 9:00 AM - 8:00 PM<br />
                    Friday: 2:00 PM - 8:00 PM
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                <MessageSquare size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Dubai Marina',
                'Downtown Dubai',
                'Business Bay',
                'JBR',
                'Arabian Ranches',
                'Dubai Hills',
                'Abu Dhabi',
                'Al Ain'
              ].map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  <span className="text-slate-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Do you offer free home consultations?
              </h3>
              <p className="text-slate-600">
                Yes! We provide free home consultations where our experts visit your location to take measurements and help you choose the perfect curtains and blinds for your space.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                What is your warranty policy?
              </h3>
              <p className="text-slate-600">
                All our products come with a comprehensive 12-month warranty covering manufacturing defects and installation issues. We stand behind the quality of our products.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Do you offer installation services?
              </h3>
              <p className="text-slate-600">
                Yes, professional installation is included with all our products. Our experienced technicians ensure perfect fitting and smooth operation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept cash, credit/debit cards, bank transfers, and offer flexible installment plans to make your purchase more convenient.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                How long does delivery take?
              </h3>
              <p className="text-slate-600">
                Standard products are typically delivered within 5-7 business days. Custom-made products may take 10-14 business days depending on specifications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Can I get a custom size?
              </h3>
              <p className="text-slate-600">
                Absolutely! All our products can be customized to your exact window dimensions. Use our online calculator or book a consultation for precise measurements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
