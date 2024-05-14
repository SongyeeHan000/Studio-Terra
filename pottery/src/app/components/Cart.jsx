'use client' 

// import prisma from '../../../lib/prisma'
import { useEffect, useState } from 'react'
import {getProduct} from '../api/cart'

export default  function  CartItems() {
    const [cart, setCart] = useState([])

    // useEffect(()=> {

    //     async function fetchItems () {
    //         const currentCart = []
    //         const itemId = Object.keys(localStorage)
    //         console.log(itemId)

    //         try {
    //             for (let i = 0; i < itemId.length; i++) {
    //                 const numberOfProducts = localStorage.getItem(itemId[i])
    //                 const product = getProduct(itemId)
    //                 console.log("product here", product)
    //                 // const product = await prisma.pottery.findUnique({
    //                 //     where: {
    //                 //         id: parseInt(itemId[i])
    //                 //     }
    //                 // })
    //                 // currentCart.push([product, numberOfProducts])
    //                 // console.log("current product being pushed", currentCart)
    //             }
    //         } catch (e) {
    //             console.log(`Error in fetching product's data`, e)
    //         }

    //     }
    //     fetchItems()

        
        // const itemsId = Object.keys(localStorage)
        // console.log("Items here", itemsId)
        // for (let i = 0; i < itemsId.length; i++) {
        //     const numberOfProducts = localStorage.getItem(itemsId[i])   
        //     const product = await prisma.pottery.findUnique({
        //         where: {
        //             id: parseInt(itemsId[i])
        //         }
        //     })
        //     console.log("product title", prodcut.title)
        // }
    // }, [])
    function clearCart() {
        if (localStorage.length !== 0) {
            localStorage.clear();
    
        }
    }

    return (
        <div>
             <div>cart items here</div>
             <button onClick={clearCart}>Clear Cart</button>
        </div>
       
    )
}