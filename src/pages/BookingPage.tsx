import BookingForm from '../components/BookingForm';

interface BookingPageProps {
  onSuccess?: () => void;
}

export default function BookingPage({ onSuccess }: BookingPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}
