import NavBar from "@/app/components/navbar/page"
import SingleProductCard from '../../../components/SingleProduct'
import { getSingleProduct } from "@/app/api/products/page"

export default async function SingleProductPage (props) {
    const params = props.params.productId
    const product = await getSingleProduct(params)
    const price = (product.price/100).toFixed(2)

    return (
        <div className="singleProductPage">
            <img src={product.image} alt={product.title} width={500} height={500}/>
            <SingleProductCard product={product}/>
        </div>
    )
}