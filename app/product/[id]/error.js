'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function error({reset}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
        <div className="container error-page">
            <Image alt="Error image" width={400} height={150} src={"/error.png"} />
           <h2>Something went wrong</h2>
            <div className="actions">
                <button onClick={() => reset()}>Try Again</button>
                <button onClick={() => router.back()} className="outline">Go Back</button>
            </div>
        </div>
    )
}
