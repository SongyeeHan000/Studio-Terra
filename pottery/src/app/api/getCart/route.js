'use server' 

import prisma from '../../../../lib/prisma'
import { NextResponse } from "next/server";


// // export async function findingCartSubtotal (products) {
// //     let total = products
// //     for (let i = 0; i )
// // }


export async function fetchLocalStorageProducts(cartData) {
    // cartData is now a plain object
    const products = []; // Process cartData to fetch products
    let total = 0;
  
    for (const [id, quantity] of Object.entries(cartData)) {
        const numericId = parseInt(id)
        if (isNaN(numericId)) {
            console.error(`Invalid ID: ${id}`);
            continue;
        }
        console.log("here", typeof numericId)
        const product = await prisma.pottery.findUnique({
                            where: {
                                id: numericId}
                        })
        total += product.price * quantity;
        products.push({ ...product, quantity });
    }

    return { cart: products, total };
}
