import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart)
        console.log(newCart)
    }
    // console.log(products)

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2 style={{textAlign:'center'}}>Order Summary</h2>
                <p>Selected item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;