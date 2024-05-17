'use server' 

import prisma from '../../../../lib/prisma'
import { NextResponse } from "next/server";

export async function fetchLocalStorageProducts(productIds, numberOfProduct){
    const products = []
    let total = 0
    for (let i = 0; i < productIds.length; i++) {
        console.log("productId", numberOfProduct[i])
        try {
            const product = await prisma.pottery.findUnique({
                where: {
                    id: productIds[i]}
            })
            products.push(product)
            const price = product.price
            total += price * numberOfProduct[i]
        } catch (e) {
            console.log("Unable to push product or find product", e)
        }
    }
    return [products, total]
}

// export async function findingCartSubtotal (products) {
//     let total = products
//     for (let i = 0; i )
// }