import Link from 'next/link'
// import Image from 'next/image'

export default function Product ({product}) {
    const price = (product.price/100).toFixed(2)


    return (
        <div className='singleProduct'>
            <Link href={`/products/${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    width={300}
                    height={300}
                />
                <p>{product.title}</p>
                <p>{price}</p>   
            </Link>
         
        </div>
    )
}