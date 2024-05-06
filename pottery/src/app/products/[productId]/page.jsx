import prisma from "../../../../lib/prisma"
import NavBar from "@/app/components/navbar/page"

export default async function SingleProduct ({params}) {
    const product = await prisma.pottery.findUnique({
        where: {
            id: parseInt(params.productId)
        }
    })
    const price =(product.price/100).toFixed(2)
    return (
        <div>
            <NavBar />
            <div className="singleProductPage">
                <div >
                    <img src={product.image} alt={product.title} width={500} height={500}/>
                </div>
                <div >
                    <h1>{product.title}</h1>
                    <h3>{price}</h3>
                    <p>{product.description}</p>
                    {/* Add increment button */}
                    <button>Add to Cart</button>
                </div>
               

            </div>
        </div>
    )
}