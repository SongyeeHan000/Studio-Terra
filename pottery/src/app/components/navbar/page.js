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
            total += parseInt(values[i])
        }
        setCart(total)
    },[])

    return (
        <header>
            <div className="navbar">
                    <div>
                        <Link href="/about">About</Link>
                        <Link href="/products">Shop</Link>
                    </div>
                    <div>
                        <Link href='/'>The Daily Grind</Link>
                    </div>
                    <div>
                        <Link href="/contact">Contact</Link>
                        <Link href="/cart">Cart({cart})</Link>
                    </div>      
            </div>
        </header>
      
    )
  }
  