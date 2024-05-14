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
        console.log(product, count)
        localStorage.setItem(product.id, count)
    }
    useEffect(() => {
        console.log('Updated count:', count);
    }, [count]);
      
    return (
        <div id="productData">
                <h1>{product.title}</h1>
                <h3>${price} USD</h3>
                <p>{product.description}</p>
                <div>
                    <button onClick={handleDecrements}>-</button>
                        <input id='counter' type='number' min={0} value={count} onChange={handleChange} />
                    <button onClick={handleIncrements}>+</button>
                </div>
                <button onClick={handleCart}>Add to Cart</button>
        </div>
        
    )
}