import { createContext, useContext, useState } from "react"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleAddToCart = (productId, itemPrice, itemName, itemCategory, itemThumbnail) => {
        setCartItems([...cartItems, { id: productId, quantity: 1, price: itemPrice, name: itemName, category: itemCategory, thumbnail: itemThumbnail }]);
    }

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId))
    }
    
    const handleIncrementItem = (productId) => {
        setCartItems(cartItems.map(item => item.id === productId ? {...item, quantity: item.quantity + 1} : item))
    }
    
    const handleDecrementItem = (productId) => {
        const item = cartItems.find(item => item.id === productId)
    
        if (item.quantity === 1) {
          setCartItems(cartItems.filter(item => item.id !== productId))
        } else {
          setCartItems(cartItems.map(item => item.id === productId ? {...item, quantity: item.quantity - 1} : item))
        } 
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        return cartItems.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0)
    }   

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, handleAddToCart, handleRemoveFromCart, handleIncrementItem, handleDecrementItem, getTotalItems, getTotalPrice, showModal, setShowModal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
  };
