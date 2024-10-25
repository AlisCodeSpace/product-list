import { useEffect } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import ConfirmationModal from './components/Cart/ConfirmationModal'
import ProductList from './components/Products/ProductList'
import { CartProvider, useCart } from './hooks/Context'

const App = () => {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  )
}

const MainContent = () => {
  const { showModal } = useCart();  // Access showModal from context

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
      document.body.style.pointerEvents = 'none'; // Disable clicking and hovering
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.pointerEvents = 'auto'; // Disable clicking and hovering
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.pointerEvents = 'auto'; // Disable clicking and hovering
    }
  }, [showModal])

  return (
    <div className={`relative flex items-center justify-center ${showModal ? 'bg-black bg-opacity-50 pointer-events-none' : 'rose-bg pointer-events-auto'} min-h-screen`}>
      <div className={`flex flex-col lg:flex-row w-[90%] gap-6 items-start justify-center ${showModal ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
        
        {/* Main Content Section */}
        <div className='w-full lg:w-4/6'>
          <h1 className='text-4xl mt-6 font-bold w-full'>Desserts</h1>
          <div className='my-8'>
            <ProductList />
          </div>
        </div>

        {/* Cart Section */}
        <div className='w-full lg:w-2/6 mt-10'>
          <Cart />
        </div>
      </div>
      <div className='pointer-events-auto'>
        <ConfirmationModal />
      </div>
    </div>
  );
};

export default App
