'use client'
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard"
import { useState } from "react"

export default function PaginatedList({category, initialProducts, totalProducts}) {
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoadMore = async ()=> {
        setError('');
        setLoading(true);
        try{
            const res = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8&skip=${products.length}`)
            const data = await res.json();
            setProducts([...products, ...data.products]);
        } catch(error){
            setError('Failed to load products');
        } finally{
            setLoading(false)
        }
    }

    return (
        <>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
            {
                products.length < totalProducts ?
                <button onClick={() => handleLoadMore()} disabled={loading}>
                    {loading ? Loader : 'Load More'}
                </button>
                : ''
            }
            <p>Showing {products.length} of {totalProducts} products</p>
            {
                error &&
                <p>{error}</p>
            }
        </>
    )
}
