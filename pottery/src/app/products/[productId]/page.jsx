import prisma from "../../../../lib/prisma"
import NavBar from "@/app/components/navbar/page"
import SingleProduct from '../../components/SingleProduct'

export default async function SingleProductPage ({params}) {
    const product = await prisma.pottery.findUnique({
        where: {
            id: parseInt(params.productId)
        }
    })
    const price =(product.price/100).toFixed(2)

    return (
        <div>
            {/* <NavBar /> */}
            <div className="singleProductPage">
                <div >
                    <img src={product.image} alt={product.title} width={500} height={500}/>
                </div>
                <SingleProduct product={product}/>
            </div>
        </div>
    )
}