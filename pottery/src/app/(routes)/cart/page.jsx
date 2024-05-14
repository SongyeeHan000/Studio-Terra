
// import { useEffect, useState } from "react";
import { getItems } from '@/app/api/cart'
import CartItems from '@/app/components/Cart'

export default function Cart() {
    // const [cartItems, setCartItems] = useState([])
    // function removeAllItems() {
    //     localStorage.clear();
    // }

    //show call items in cart
    // useEffect(()=> {
    //     const itemsId = Object.keys(localStorage)
    //     for (let i = 0; i < itemsId.length; i++) {
            
    //     }
    // })
    const items = []
    function getCartItems() {
        console.log(Object.keys(local))
    }

    return (
        <div>
            <p>Cart Page</p>
            <CartItems />
        </div>
      
    )
  }
  