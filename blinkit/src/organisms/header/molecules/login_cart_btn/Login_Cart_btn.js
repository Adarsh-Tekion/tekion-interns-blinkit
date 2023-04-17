import React from 'react'
import { Button } from '../../../../atoms/button'
import cart_img from '../../../../images/shopping_cart.ico';
import './login_cart_btn.css'
import { Link } from 'react-router-dom';

export default function Login_Cart_btn() {
  return (
    <div className="header-login-btn flex align-center">
    <Button styles="login-btn" children="Login"/>
    <Link to="/checkout">
        <button className="add-to-cart flex justify-center align-center">
          <img src={cart_img} alt="cart image"/> 
     My Cart
  </button>
  </Link>
  </div>
  )
}
