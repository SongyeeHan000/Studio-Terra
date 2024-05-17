'use server' 

import prisma from '../../../../lib/prisma'
import { NextResponse } from "next/server";

export async function fetchLocalStorageProducts(productIds){
    const products = []
    for (let i = 0; i < productIds.length; i++) {
        console.log("productId", productIds[i])
        try {
            const product = await prisma.pottery.findUnique({
                where: {
                    id: productIds[i]}
            })
            products.push(product)
        } catch (e) {
            console.log("Unable to push product or find product", e)
        }
    }
    return products
}
