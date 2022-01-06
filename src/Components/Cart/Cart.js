import React from 'react';
import './Cart.scss';

const Cart = ({items}) => {


  const cartItems = items.map((product) => {
        return (
          <div className="single-item">
            <img src={product.url} alt={`${product.title} by ${product.artist}`}></img>
            <p></p>
            <p>{product.price}</p>
          </div>
        )
    })
	
	return (
		<div className="cart">
      <h2 className="cart-header">your cart</h2>
      <div className="cart-bar"></div>
      <div className="cart-columns">
        <p className="cart-text">Item</p>
        <p className="cart-text">Quantity</p>
        <p className="cart-text">Price</p>
      </div>
      <section className="cart-items">
        {cartItems}
      </section>
      <section className="cart-finances">
        <p className="cart-text">Subtotal ${}</p>
        <p className="cart-text">Tax ${}</p>
        <p className="cart-text">Shipping Estimate ${}</p>
        <h3 className="cart-total">Total ${}</h3>
      </section>
    </div>
	)
}

export default Cart;