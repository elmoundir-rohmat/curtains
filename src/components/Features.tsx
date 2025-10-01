import { Shield, Clock, CreditCard, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: '12 Month Warranty',
      description: 'Complete peace of mind with our comprehensive warranty on all products and installations.'
    },
    {
      icon: Clock,
      title: '7 Days Support',
      description: 'Our dedicated support team is available every day to assist you with any questions.'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payments',
      description: 'Multiple payment options including installment plans to suit your budget.'
    },
    {
      icon: Headphones,
      title: 'Expert Consultation',
      description: 'Free home consultation with our design experts to find the perfect solution.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are committed to providing exceptional quality and service to every customer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
