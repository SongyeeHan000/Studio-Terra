'use client' 

import { useEffect, useState } from 'react'
import prisma from '../../../lib/prisma'
import { fetchLocalStorageProducts } from '../api/getCart/route'

export default function  CartItems() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          if (localStorage.length === 0) {
            return;
          }
          const keys = Object.keys(localStorage);
          const productIds = keys.map((key) => parseInt(key));

          try {
            const fetchedProducts = await fetchLocalStorageProducts(productIds)
            setCart(fetchedProducts)
          } catch (error) {
            console.error('Error fetching products:', error);
           
          } 
        };
        fetchProducts()
    },[])

    function getCartItems() {
        console.log("cart items", cart)
    }
    function clearCart() {
        if (localStorage.length !== 0) {
            localStorage.clear();
    
        }
    }

    return (
        <div>
             <div>cart items here</div>
             <button onClick={getCartItems}>Get Items</button>
             <button onClick={clearCart}>Clear Cart</button>
        </div>
       
    )
}