'use client'
import styles from './addToCart.module.css'
import { useCart } from '../context/CartContext'
import { useState } from 'react';


export default function AddToCart({product}) {
  const {addToCart, removeFromCart, updateQuantity, items} = useCart();
  const itemInCart = items.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(itemInCart ? itemInCart.quantity : 1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.stock) return;
    setQuantity(newQuantity)
    if (itemInCart) {
      updateQuantity(product.id, newQuantity)
    }
  }

  return (
    <div className={styles['add-to-bag']}>

      <div className={styles.quantity}>
            <button 
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="minimal"
            >
              -
            </button>
            <input disabled value={quantity} />
            <button  
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= product.stock}
              className="minimal"
            >
              +
            </button>
      </div>
      {
        itemInCart ? (
          <div className={styles.actions}>
            <p>Added to cart!</p>
            <button onClick={() => {removeFromCart(product.id); setQuantity(1)}} className='outline'>Remove</button>
          </div>
        ) : (
          <button onClick={()=> addToCart(product, quantity)}>Add to cart</button>
        )
      }

    </div>
  )
}
