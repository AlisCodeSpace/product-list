import './App.css'
import Cart from './components/Cart/Cart'
import ProductList from './components/Products/ProductList'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center my-3 mx-8'>
      <h1 className='text-4xl font-bold w-full'>Desserts</h1>
      <div className='my-8'>
        <ProductList />
      </div>
      <Cart />
    </div>
  )
}

export default App
