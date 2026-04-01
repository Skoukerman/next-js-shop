'use client'
import { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext();

export function CartProvider({children}){
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("cart")
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items]);

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

    const emptyCart = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{items, addToCart, removeFromCart, updateQuantity, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}