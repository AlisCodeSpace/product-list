import AddToCart from '../UI/AddToCart'

const Product = ({ mobileImage, desktopImage, tabletImage, name, category, price, isInCart, quantity, handleAddToCart, handleIncrementItem, handleDecrementItem }) => {

  const activeItem = isInCart ? 'border-2 red-border' : ''

  return (
    <li className="list-none mb-6 w-full sm:w-[180px]">
        <div>
            <div className="relative">
                <picture>
                  <source srcSet={desktopImage} media='(min-width: 1024px)'/>
                  <source srcSet={tabletImage} media='(min-width: 640px)'/>
                  <img className={`w-full rounded-lg border-2 border-transparent ${activeItem}`} src={mobileImage} alt="Creme Brulee" />
                </picture>
                <AddToCart 
                  addItem={handleAddToCart} 
                  isInCart={isInCart}
                  itemQuantity={quantity}
                  incrementItem={handleIncrementItem}
                  decrementItem={handleDecrementItem}
                />
            </div>
            <div>
                <span className='text-rose-400'>{category}</span>
                <p className='text-rose-900 text-lg font-semibold'>{name}</p>
                <span className='red font-bold'>${price.toFixed(2)}</span>
            </div>
        </div>
    </li>
  )
}

export default Product
