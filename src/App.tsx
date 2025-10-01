import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './components/ContactPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartItem } from './lib/supabase';

type Page = 'home' | 'products' | 'booking' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (item: CartItem) => {
    const existingIndex = cartItems.findIndex(
      (i) =>
        i.product.id === item.product.id &&
        i.width === item.width &&
        i.height === item.height
    );

    if (existingIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingIndex].quantity += item.quantity;
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, item]);
    }

    setShowCart(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const newItems = [...cartItems];
    newItems[index].quantity = quantity;
    setCartItems(newItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOrderSuccess = () => {
    setShowCheckout(false);
    setCartItems([]);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCurrentPage('home');
    }, 3000);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
        onNavigate={(page) => setCurrentPage(page as Page)}
      />

      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg">
          <p className="font-medium">Order placed successfully! We'll contact you soon.</p>
        </div>
      )}

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onBookingClick={() => setCurrentPage('booking')}
            onProductsClick={() => setCurrentPage('products')}
            onAddToCart={handleAddToCart}
          />
        )}
        {currentPage === 'products' && (
          <ProductsPage onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'booking' && (
          <BookingPage onSuccess={() => setCurrentPage('home')} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer />

      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      )}

      {showCheckout && (
        <Checkout
          items={cartItems}
          onClose={() => setShowCheckout(false)}
          onSuccess={handleOrderSuccess}
        />
      )}
    </div>
  );
}

export default App;
