import addToCart from '../../assets/images/icon-add-to-cart.svg'

const AddToCart = () => {
  return (
    <div className='relative bottom-6 w-full flex justify-center items-center'>
        <button className="bg-white flex rounded-full border border-rose-400 py-3 px-7 gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:text-red-500 text-rose-900 font-semibold">
            <img src={addToCart} alt="" />
            <span className=''>Add to Cart</span>
        </button>
    </div>
  )
}

export default AddToCart
