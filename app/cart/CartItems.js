'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext'
import styles from './cartItems.module.css'
import { formatPrice } from '../util';

export default function CartItems() {

    const {removeFromCart, emptyCart, updateQuantity, items} = useCart();

    const handleRemoveItem = (itemId) => {
        removeFromCart(itemId);
    }

    const handleEmptyCart = () => {
        if (confirm("Are you sure you want to empty the cart?")){
            emptyCart();
        }
    }

    const calculateTotal = () => {
        return formatPrice(items.reduce((total, item) => total + item.price * item.quantity , 0))
    }

    return (
        <main className="container">
            {
            items.length ?
            <>
                <table className={styles["shopping-bag-table"]}>
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Image src={item.thumbnail} alt={`item image - ${item.title}`} width={50} height={50} />
                                </td>
                                <td>
                                    <Link href={`/product/${item.id}`}>{item.title}</Link>
                                </td>
                                <td>
                                    {formatPrice(item.price)}
                                </td>
                                <td className={styles.quantity}>
                                    <div className={styles["actions"]}>
                                        <button
                                        className={styles.qty}
                                        onClick={()=> updateQuantity(item.id, item.quantity -1)}
                                        disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input type="text" value={item.quantity} disabled />
                                        <button
                                        className={styles.qty}
                                        onClick={()=> updateQuantity(item.id, item.quantity +1)}
                                        disabled={item.quantity >= item.stock}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles["stock"]}>
                                        {item.stock} items in stock
                                    </div>
                                </td>
                                <td>
                                    {formatPrice(item.price * item.quantity)}
                                </td>

                                <td>
                                    <button onClick={() => handleRemoveItem(item.id)} title="Remove from cart" className="transparent"> &#x2715; </button>
                                </td>
                            </tr>
                        ))}

                        <tr className={styles['grand-total']}>
                            <td colSpan="4"></td>
                            <td colSpan="2"> Grand Total: {calculateTotal()} </td>
                        </tr>
                        
                    </tbody>
                </table> 
                <section className={styles['basket-options']}>
                    <button 
                    className='outline'
                    onClick={() => handleEmptyCart()}
                    >Empty cart</button>
                    <Link href="/products">
                        <button className='outline' >Continue Shopping</button>
                    </Link>
                    <button>Proceed to Checkout</button>
                </section>
            </>
            :
            <div className={styles['empty-cart']}>
                <h3>Your cart is empty</h3>
                <p>
                    <Link href="/products">Click here</Link> to start shopping.
                </p>
            </div>
            } 
        </main>
    )
}
