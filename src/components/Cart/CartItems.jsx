import React from 'react'
import removeItem from '../../assets/images/icon-remove-item.svg'

const CartItems = () => {
  return (
    <li className=''>
      <div className='flex justify-between'>
        <div>
            <h3 className='font-semibold'>Classic Tiramisu</h3>
            <div className='flex gap-3 my-2'>
                <span className='red font-bold'>1x</span>
                <span className='rose-500'>@ $5.50</span>
                <span className='rose-500 font-semibold'>$5.50</span>
            </div>
        </div>
        <div className='flex items-center'>
            <button className='rounded-full border border--rose--400 p-1 hover:text-rose-950'><img src={removeItem} alt="Remove Item" /></button>
        </div>
      </div>
      <hr className='my-3'/>
    </li>
  )
}

export default CartItems
