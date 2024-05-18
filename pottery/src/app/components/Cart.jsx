'use client' 

import { useEffect, useState } from 'react'
import { fetchLocalStorageProducts } from '../api/getCart/route'
import Checkout from './Checkout'
import Link from 'next/link'

export default function  CartItems() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchProducts = async () => {
          if (localStorage.length === 0) {
            return;
          }
          const keys = Object.keys(localStorage);
          const values = Object.values(localStorage)
          const productIds = keys.map((key) => parseInt(key));
          const numberOfProducts = values.map((num) => parseInt(num))

          try {
            // Create a different name for "fetchLocalStorgaeProducts"
            const fetchedProducts = await fetchLocalStorageProducts(productIds, numberOfProducts)
            setCart(fetchedProducts[0])
            setTotal((fetchedProducts[1]/100).toFixed(2))        
          } catch (error) {
            console.error('Error fetching products:', error);
          } 
        };
        fetchProducts()
    },[])
   
    function checkingItemsInCart() {
        console.log("cart items", cart)
    }
    function clearCart() {
        //probably give a warning. might need to create a new component for this
        if (localStorage.length !== 0) {
            localStorage.clear();
            setTotal(0)
        }
        window.location.reload();
    }
    if (cart.length === 0) {
        return ( 
            <div>
                <h3>Cart is Empty.</h3>
                <p>Shop here:<Link href='/products'>Products</Link> </p>

            </div>
        )
    }

    return (
        <div className='cartPage'>
            <div className='cart'>
                {cart.map((item,index) => {
                    return (
                        <div className='cartItem' key={item.id}>
                            <img src={item.image} width={100} height={100} alt={item.title} />
                            <div className='cartItemInfo'>
                                <p>{item.title}</p>
                                <p>${(item.price/100).toFixed(2)}</p>
                                <p>Quantity: {localStorage[item.id]}</p>
                                <div>
                                    {/* <button>-</button>
                                        <input id='counter' value={localStorage[item.id]} type='number' />
                                    <button>+</button> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={checkingItemsInCart}>Check if Items in Cart</button>
                <button onClick={clearCart}>Clear Cart</button>

                <p>Total: ${total}</p>
                <button>Checkout</button>
            </div>
        </div>
        
       
    )
}