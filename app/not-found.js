'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="error-page container">
            <Image src="/404.png" alt="Not found image" width={600} height={200}/>
            <h1>Page not found</h1>
            <div className="actions">
                <button className="outline" onClick={() => router.back()}>Go back</button>
            </div>
        </div>
    )
}
