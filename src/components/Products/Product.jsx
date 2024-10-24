import AddToCart from '../UI/AddToCart'

const Product = (props) => {
  return (
    <li className="list-none mb-6">
        <div>
            <div className="relative w-full">
                <img className='w-full rounded-lg' src={props.image} alt="Creme Brulee" />
                <AddToCart />
            </div>
            <div>
                <span className='text-rose-400'>{props.category}</span>
                <p className='text-rose-900 text-lg font-semibold'>{props.name}</p>
                <span className='red font-bold'>${props.price.toFixed(2)}</span>
            </div>
        </div>
    </li>
  )
}

export default Product
