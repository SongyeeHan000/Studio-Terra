import prisma from "../../../../lib/prisma"

export async function getProducts() {
    try {
      const products = await prisma.coffee.findMany({})
      return products
    } catch (e) {
      console.log("Cannot retrieve all products from Prisma.", e)
    }
  
}

export async function getSingleProduct(params) {
   try {
    console.log("params here",params)
        const product = await prisma.coffee.findUnique({
            where: {
                id: parseInt(params)
            }
        })
        return product
    } catch (e) {
        console.log("Cannot retrieve specific product from Prisma", e)
    }

}
