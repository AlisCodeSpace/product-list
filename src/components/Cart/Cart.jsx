import React from 'react'
import CartItems from './CartItems'

import carbonNeutral from '../../assets/images/icon-carbon-neutral.svg'
import emptyIllustration from '../../assets/images/illustration-empty-cart.svg'

import { useCart } from '../../hooks/Context'

const Cart = () => {
  const { getTotalItems, getTotalPrice, setShowModal } = useCart()

  const renderCart = () => (
    <>
      <ul className='my-4'>
        <CartItems />
      </ul>
      <div className='flex justify-between items-center'>
        <p className='text-rose-900'>Order Total</p>
        <h2 className='font-extrabold text-3xl'>${getTotalPrice().toFixed(2)}</h2>
      </div>
      <div className='bg-rose-50 flex gap-2 rounded-md py-4 mt-8 items-center justify-center'>
        <img src={carbonNeutral} alt="Carbon Neutral" />
        <p>This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
      </div>
      <button onClick={() => setShowModal(true)} className='red-bg rounded-full py-3 text-white font-semibold mt-8 hover:bg-rose-950 transition-all ease-in-out duration-200'>Confirm Order</button>
    </>
  )

  const renderEmptyCart = () => (
    <div className="flex flex-col items-center justify-center mt-10 gap-3">
      <img src={emptyIllustration} alt="" />
      <p className="rose-500 font-medium">Your added items will appear here</p>
    </div>
  )

  return (
    <div className='flex flex-col px-6 py-4 bg-white rounded-xl w-full mb-8'>
      <h1 className='red text-2xl font-bold'>Your Cart ({getTotalItems()})</h1>
      {getTotalItems() > 0 ? renderCart() : renderEmptyCart()}
    </div>
  )
}

export default Cart
