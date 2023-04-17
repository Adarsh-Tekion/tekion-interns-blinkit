import React from 'react'
import './header.Module.css';
import blinkit_logo from '../../images/blinkit_logo.webp';
import { Location_Time } from './molecules/locationTime';
import { Login_Cart_btn } from './molecules/login_cart_btn';
export default function header() {
  return (
    <header className="flex">
    <div className="header-logo flex align-center">
      <img src ={blinkit_logo} alt = "blinkit logo" className = "logo"/>
       <Location_Time/>
       </div>
       <Login_Cart_btn/>
 </header>
  )
}
