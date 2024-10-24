import Product from "./Product"
import data from '../../data/data'

const ProductList = () => {
  const products = data.map((product, index) => (
    <Product key={index} image={product.image.mobile} name={product.name} category={product.category} price={product.price}/>
  ))

  return (
    <ul className="flex max-sm:flex-col">
      {products}
    </ul>
  )
}

export default ProductList
