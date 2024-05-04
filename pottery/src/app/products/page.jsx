// "use client"
// import { useEffect, useState } from "react"
import prisma from "../../../lib/prisma"
import NavBar from "../components/navbar/page"
import Product from "../components/Products"

async function getProducts() {
  try {
    const products = await prisma.pottery.findMany({})
    return products
  } catch (e) {
    console.log("Cannot retrieve products from Prisma.", e)
  }

}
export default async function AllPotteries() {
  const products = await getProducts()

  return (
    <div>
      <NavBar/>
        <h1>Pottery page</h1>
        <p>All handmade just for you</p>
        <>
          {products.map((product) => {
            return (
              <Product 
                key={product.id}
                product={product}
              />
            )
          })}
        </>
    </div>
  )
}
