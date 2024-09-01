'use client' 

import { useEffect, useState } from 'react'
export default function SingleProductCard ({product}) {
    let [quantity, setQuantity] = useState(0)

    const price = (product.price/100).toFixed(2)

    function handleIncrements() {
        setQuantity(quantity => quantity + 1)
        console.log("handling Increments:", quantity)
    }
    function handleDecrements() {
        if (quantity > 0){
            setQuantity(quantity => quantity - 1)
            console.log("handling decrements:", quantity)
        }

    }
    function handleInputOnChange (e) {
        const newValue = e.target.value
        console.log(newValue)
        if (!isNaN(newValue) && newValue !== '') {
            setQuantity(parseInt(newValue,10))
        } else {
            setQuantity(0)
        }
    }

    function handleCart() {
        console.log(quantity, product)
        if (localStorage.getItem(product.id)) {
            let numberOfItems = parseInt(localStorage.getItem(product.id),10)
            numberOfItems += quantity
            localStorage.setItem(product.id, numberOfItems)
        } else {
            localStorage.setItem(product.id, quantity)
        }
        window.location.reload()
    }
    useEffect(() => {
        console.log('Updated quantity:', quantity);
    }, [quantity]);
      
    return (
        <div id="productData">
                <h1>{product.title}</h1>
                <h3>${price} USD</h3>
                <p>{product.description}</p>
                <div>
                    <button onClick={handleDecrements}>-</button>
                        <input id='counter' type='number' min={0} value={quantity} onChange={handleInputOnChange}/>
                    <button onClick={handleIncrements}>+</button>
                </div>
                <button onClick={handleCart}>Add to Cart</button>
        </div>
        
    )
}