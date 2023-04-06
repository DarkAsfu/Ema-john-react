import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // const cart = props.cart; // option 1 
    const {cart} = props; // option 2
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total+=product.price;
        totalShipping+=product.shipping;
    }
    const tax = (total*0.07).toFixed(2);
    const grandTotal =parseInt(total)+parseInt(totalShipping)+parseFloat(tax);
    console.log(cart)
    return (
        <div className='cart'>
            <h2 style={{margin:'0'}}>Order Summary</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;