import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // const cart = props.cart; // option 1 
    const {cart} = props; // option 2
    let total = 0;
    for(const product of cart){
        total+=product.price;
    }
    return (
        <div className='cart'>
            <h2 style={{margin:'0'}}>Order Summary</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: </p>
            <p>Tax</p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;