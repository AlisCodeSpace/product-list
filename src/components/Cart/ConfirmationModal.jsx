import React from 'react'
import tick from '../../assets/images/icon-order-confirmed.svg'

import { useCart } from '../../hooks/Context'


const ConfirmationModal = () => {
    const { cartItems, setCartItems, getTotalPrice, showModal, setShowModal } = useCart()

    const renderCartItems = cartItems.map((item) => (
        <li className=''>
            <div className='flex gap-4'>
                <div>
                    <img className='rounded-md' src={item.thumbnail} alt="Thumbnail" />
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold'>{item.name}</span>
                        <div className='flex gap-3'>
                            <span className='red font-semibold'>{item.quantity}x</span>
                            <span className='rose-500 font-medium'>@ ${item.price}</span>
                        </div>
                    </div>
                    <div>
                        <span className='rose-900 font-semibold text-xl'>${item.price * item.quantity}</span>
                    </div>
                </div>
            </div>
            <hr className='mt-6'/>
        </li>
    ))
    return (
        <div>
          <div
            className={`bg-white w-full bottom-0 left-0 sm:left-1/3 fixed z-50 p-8 rounded-tr-xl rounded-tl-xl md:rounded-xl h-[90vh] sm:h-[65vh] sm:w-[500px]  ${
                showModal ? 'show sm:bottom-1/4 sm:left-1/3' : ''
            } sm:centered-modal transition-all duration-500 ease-in-out ${
                showModal ? 'translate-y-0' : 'translate-y-full'
            }`}
            >
            <img src={tick} alt="Order Confirmed Icon" />
            <div className='mt-4 mb-6'>
              <h1 className='text-5xl font-extrabold pr-6'>Order Confirmed</h1>
              <p className='rose-500 mt-4'>We hope you enjoy your food!</p>
            </div>
            <div className='flex flex-col items-center justify-center my-4'>
              <div className='rose-bg rounded-lg w-full'>
                <ul className='flex flex-col p-4 gap-4 overflow-scroll max-h-[38vh] scrollbar-hide'>
                  {renderCartItems}
                </ul>
                <div className='flex justify-between items-center mb-6 mt-4 px-4'>
                  <span className='rose-500'>Order Total</span>
                  <h3 className='rose-900 text-2xl font-bold'>${getTotalPrice().toFixed(2)}</h3>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  setCartItems([]);
                }}
                className='w-full mt-8 py-3 red-bg rounded-full text-white font-medium cursor-pointer hover:bg-rose-950 transition-all ease-in-out duration-200'>
                Start New Order
              </button>
            </div>
          </div>
        </div>
      );
    };

export default ConfirmationModal
