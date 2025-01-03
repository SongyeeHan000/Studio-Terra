'use client' 

import { useEffect, useState } from 'react'
export default function SingleProduct ({product}) {
    let [count, setCount] = useState(0)

    const price = (product.price/100).toFixed(2)

    function handleIncrements() {
        setCount(count => count + 1)
        console.log(count)
    }
    function handleDecrements() {
        if (count > 0){
            setCount(count => count - 1)
        }

    }
    function handleChange(event){
        const newCount = parseInt(event.target.value)
        setCount(newCount)
    }
    function handleCart() {
        console.log(count, product)
        if (localStorage.getItem(product.id)) {
            // console.log("entered", product.id, numberOfItems)
            let numberOfItems = parseInt(localStorage[product.id])
            numberOfItems += count
            localStorage.setItem(product.id, numberOfItems)
        } else {
            localStorage.setItem(product.id, count)
        }
        window.location.reload()
    }
    useEffect(() => {
        console.log('Updated count:', count);
    }, [count]);
      
    return (
        <div id="productData">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${price} USD</p>
            <p>Quantity:</p>
            <div className="counter">
                                <button onClick={handleDecrements}>-</button>
                                <span id="value">{count}</span>
                                <button onClick={handleIncrements}>+</button>
                            </div>
            <br/>
            <button className="addToCartButton" onClick={handleCart}>Add to Cart</button>
        </div>
        
    )
}