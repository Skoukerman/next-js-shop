import styles from './page.module.css'
import CartItems from './CartItems'

export default function page() {
  return (
    <div className={styles.cart}>
        <div className="page-header">
            <h1>Shopping Cart</h1>
        </div>
        <CartItems/>
    </div>
  )
}
