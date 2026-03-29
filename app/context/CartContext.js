'use client'
import { Children, createContext, useState, useContext } from "react"

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (product, quantity) => {
        setItems((prevItems) => {
            if (prevItems.find((item) => item.id === product.id))
                return prevItems
            return [...prevItems, {...product, quantity}]
        })
    }

    const removeFromCart = (productId) => {
        setItems((prevItems) => {
            return prevItems.filter((item) => item.id !== productId)
        })
    }

    const updateQuantity = (productId, quantity) => {
        setItems((prevItems) => {
            return prevItems.map((item) => item.id === productId ? {...item, quantity} : item)
        })
    }

    return (
        <CartContext.Provider value={{items, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}