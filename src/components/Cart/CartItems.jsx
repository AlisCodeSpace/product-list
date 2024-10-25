import React from 'react'
import removeItem from '../../assets/images/icon-remove-item.svg'
import { useCart } from '../../hooks/Context'

const CartItems = () => {
  const { cartItems, handleRemoveFromCart } = useCart()

  const renderCartItems = cartItems.map((item) => (
    <li key={item.id}>
      <div className='flex justify-between'>
        <div>
            <h3 className='font-semibold'>{item.name}</h3>
            <div className='flex gap-3 my-2'>
                <span className='red font-bold'>{item.quantity}x</span>
                <span className='rose-500'>@ ${item.price}</span>
                <span className='rose-500 font-semibold'>${item.price * item.quantity}</span>
            </div>
        </div>
        <div className='flex items-center'>
            <button onClick={() => handleRemoveFromCart(item.id)} className='rounded-full border border--rose--400 p-1 hover:text-rose-950'><img src={removeItem} alt="Remove Item" /></button>
        </div>
      </div>
      <hr className='my-3'/>
    </li>
  ))
  return renderCartItems
}

export default CartItems
