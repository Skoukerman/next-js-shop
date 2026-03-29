'use client'
import { useCart } from '../context/CartContext'

export default function CartCount() {
    const {items} = useCart();
    return (
        items.length ? <span>{items.length}</span> : ''
  )
}
