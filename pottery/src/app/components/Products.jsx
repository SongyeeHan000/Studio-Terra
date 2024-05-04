import Link from 'next/link'

export default function Product ({product}) {
    const price = (product.price/100).toFixed(2)


    return (
        <div>
            <Link href={`/products/${product.id}`}>
                <h3>{product.title}</h3>
                <p>{price}</p>   
            </Link>
         
        </div>
    )
}