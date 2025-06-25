import './header.module.css'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles['app-header']}>
      <div className={`${styles.wrapper} container `}>
        
      
        <aside>
          <Link href="/">
            <Image 
              src="/logo.png"
              alt="Website logo"
              width={108}
              height={22}/>
          </Link>
        </aside>
        <aside>
            <nav>
              <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="/products"><li>Products</li></Link>
                <Link href="/basket"><li>Shopping Cart</li></Link>
              </ul>
            </nav>
        </aside>
      </div>
    </header>
  )
}
