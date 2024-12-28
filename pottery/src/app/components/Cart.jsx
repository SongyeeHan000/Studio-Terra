'use client';

import { useEffect, useState } from 'react';
import { fetchLocalStorageProducts } from '../api/getCart/route';
import Checkout from './Checkout';
import Link from 'next/link';

export default function CartItems() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            if (localStorage.length === 0) {
                return;
            }

            try {
                // Extract plain data from localStorage
                const localStorageData = Object.keys(localStorage).reduce((acc, key) => {
                    acc[key] = localStorage.getItem(key);
                    return acc;
                }, {});

                // Pass the plain object to the function
                const fetchedProducts = await fetchLocalStorageProducts(localStorageData);
                setCart(fetchedProducts.cart);
                setTotal((fetchedProducts.total / 100).toFixed(2));
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    function clearCartHandle() {
        localStorage.clear();
        setCart([]);
        setTotal(0);
        location.reload();
    }

    if (cart.length === 0) {
        return (
            <div>
                <h3>Cart is Empty.</h3>
                <p>
                    Shop here: <Link href="/products">Products</Link>
                </p>
            </div>
        );
    }

    return (
        <div className="cartPage">
            <div className="cart">
                {cart.map((item, index) => (
                    <div className="cartItem" key={item.id}>
                        <img src={item.image} width={100} height={100} alt={item.title} />
                        <div className="cartItemInfo">
                            <p>{item.title}</p>
                            <p>${(item.price / 100).toFixed(2)}</p>
                            <p>Quantity: {localStorage[item.id]}</p>
                            <div>
                                <button>-</button>
                                <input id="counter" value={localStorage[item.id]} type="number" />
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                ))}
                <p>Total: ${total}</p>
                <button>Checkout</button>
                <button onClick={clearCartHandle}>Clear Cart</button>
            </div>
        </div>
    );
}
