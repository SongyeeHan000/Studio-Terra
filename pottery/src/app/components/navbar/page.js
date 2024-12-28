'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import cart from '../../../../public/cart.png'

export default function NavBar() {
    const [cart, setCart] = useState(0)

    useEffect(() => {
        const values = Object.values(localStorage) 
        let total = 0
        for (let i = 0; i < values.length; i++) {
            const value = parseInt(values[i])
            if (!isNaN(value)) {
                total += value
            }
        }
        setCart(total)
    },[])

    return (
        <div>
            <div className="navbar">
                    <div>
                        <Link href="/about">About</Link>
                        <Link href="/products">Shop</Link>
                    </div>
                        <div>
                            <Link href="/">Studio Terra</Link>
                        </div>
                    <div>
                        <Link href="/contact">Contact</Link>
                        {cart > 0 ? (<Link href="/cart">Cart ({cart})</Link>) : 
                            (<Link href="/cart">Cart</Link>)
            }   
                    </div>      
            </div>
        </div>
      
    )
  }
  