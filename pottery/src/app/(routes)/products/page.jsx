import prisma from "../../../../lib/prisma"
import Product from "../../components/Products"

export async function getProducts() {
  try {
    const products = await prisma.pottery.findMany()
    return products
  } catch (e) {
    console.log("Cannot retrieve all products from Prisma.", e)
  }

}
export default async function AllPotteries() {
  const products = await getProducts()

  return (
    <div className="productsPage">
        <div className="products">
          {products?.map((product) => {
            return (
              <Product 
                key={product.id}
                product={product}
              />
            )
          })}
        </div>
    </div>
  )
}
