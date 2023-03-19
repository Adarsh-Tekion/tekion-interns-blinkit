import React from 'react'
import './Header.Module.css';
import blinkit_logo from '../../images/blinkit_logo.webp';
import cart_img from '../../images/shopping_cart.ico';
import Image from '../Img_Btn_Wrapper/Image.js';

export default function header() {
  return (
    <header className="flex">
    <div className="header-logo flex align-center">
      <Image source={blinkit_logo} alternate="blinkit logo" styles = "logo"/>
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
          <Image source={cart_img} alternate="cart image" styles = ""/>
       <strong>My Cart</strong>
    </button>
    </div>
 </header>
  )
}
