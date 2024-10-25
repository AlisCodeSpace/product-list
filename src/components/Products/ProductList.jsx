import Product from "./Product"
import data from '../../data/data'
import { useState } from "react"
import { useCart } from "../../hooks/Context"

const ProductList = () => {
  const { cartItems, handleAddToCart, handleIncrementItem, handleDecrementItem } = useCart()

  const products = data.map((product, index) => {
    const itemInCart = cartItems.find(item => item.id === index);
    return (
      <Product 
        key={index}
        id={index} 
        mobileImage={product.image.mobile}
        desktopImage={product.image.desktop}
        tabletImage={product.image.tablet}
        name={product.name} 
        category={product.category} 
        price={product.price} 
        isInCart={!!itemInCart} 
        quantity={itemInCart ? itemInCart?.quantity : 0} 
        handleAddToCart={() => handleAddToCart(index, product.price, product.name, product.category, product.image.thumbnail)} 
        handleIncrementItem={() => handleIncrementItem(index)} 
        handleDecrementItem={() => handleDecrementItem(index)}
      />
    )
})

  return (
    <ul className="flex max-sm:flex-col flex-wrap gap-6">
      {products}
    </ul>
  )
}

export default ProductList
