import addToCartIcon from '../../assets/images/icon-add-to-cart.svg';
import incrementIcon from '../../assets/images/icon-increment-quantity.svg';
import decrementIcon from '../../assets/images/icon-decrement-quantity.svg';

const AddToCart = ({ addItem, isInCart, incrementItem, decrementItem, itemQuantity }) => {
  
  // Render the "Add to Cart" button
  const renderAddToCartButton = () => (
    <button 
      className="bg-white w-[200px] sm:w-[150px] flex justify-center items-center rounded-full border border-rose-400 py-3 gap-2 cursor-pointer transition-all eases-in duration-200 hover:text-red-500 text-rose-900 font-semibold" 
      onClick={addItem}
    >
      <img src={addToCartIcon} alt="Add to Cart" />
      <span>Add to Cart</span>
    </button>
  );

  // Render the quantity controls
  const renderQuantityControls = () => (
    <div className="w-[200px] sm:w-[150px] py-3 px-4 font-semibold flex justify-between items-center rounded-full border red-border red-bg gap-2">
      <img 
        onClick={decrementItem} 
        className="border rounded-full h-[20px] p-1 cursor-pointer" 
        width={20} 
        src={decrementIcon} 
        alt="Decrement" 
      />
      <span className="text-white">{itemQuantity}</span> {/* Quantity is dynamic now */}
      <img 
        onClick={incrementItem} 
        className="border rounded-full h-[20px] p-1 cursor-pointer" 
        width={20} 
        src={incrementIcon} 
        alt="Increment" 
      />
    </div>
  );

  return (
    <div className="relative bottom-6 w-full flex justify-center items-center">
      {isInCart ? renderQuantityControls() : renderAddToCartButton()}
    </div>
  );
}

export default AddToCart;
