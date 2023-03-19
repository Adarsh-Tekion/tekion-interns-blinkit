import React from 'react'
import Assets from './Assets.Module.js';
import navItems from './NavItems.Module.js';
import './Navbar.Module.css'
export default function Navbar() {
  return (
    <nav className="nav-bar flex justify-center">
      {
      navItems.map((item,index)=>(
        <Assets key = {index} link={item.link} styles = "bar" name={item.name}/>
      ))}
 </nav>
  )
}
