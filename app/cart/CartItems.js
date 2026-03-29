import styles from './cartItems.module.css'

export default function CartItems() {
  return (
    <main className="container">
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
                
                <tr>
                    <td>
                        <img src="#" alt="item image" width={50} height={50} />
                    </td>
                    <td>
                        <a href="#">Product 1</a>
                    </td>
                    <td>
                        1.00
                    </td>
                    <td className={styles.quantity}>
                        <div className={styles["actions"]}>
                            <button
                                className={styles.qty}
                            >
                                -
                            </button>
                            <input type="text" value="1" disabled />
                            <button
                                className={styles.qty}
                            >
                                +
                            </button>
                        </div>
                        <div className={styles["stock"]}>
                            5 items in stock
                        </div>
                    </td>
                    <td>
                        1.00
                    </td>
                    
                    <td>
                        <button title="Remove from basket" className="transparent"> &#x2715; </button>
                    </td>
                </tr>
 
                <tr className={styles['grand-total']}>
                    <td colSpan="4"></td>
                    <td  colSpan="2">
                    Grand Total: 1.00
                    </td>
                    
                </tr>
            </tbody>
        </table>
    </main>
  )
}
