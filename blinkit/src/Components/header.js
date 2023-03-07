import React from 'react'
import '../App.css';
import blinkit_logo from '../images/blinkit_logo.webp';
import cart_img from '../images/shopping_cart.ico';

export default function header() {
  return (
    <header className="flex">
    <div className="header-logo flex align-center">
       <img src = {blinkit_logo} alt= "blinkit logo" className="logo"/>
       <div>
          <p className="location">
             <strong>Delivery in 10 minutes</strong>
          </p>
          <p className="location">Delhi</p>
       </div>
    </div>
    <div className="header-login-butn flex align-center">
       <button className="login-btn">Login</button>
          <button className="add-to-cart flex justify-center align-center" id="cart-page">
       <img src={cart_img} alt = "cart image"/>
       <strong>My Cart</strong>
    </button>
    </div>
 </header>
  )
}
