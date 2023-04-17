import React from 'react'
import { displayNavItems } from './helpers/navbar.displayItems.js';
import './navbar.Module.css'
import { showNavbar } from './helpers/navbar.showNavbar.js';
export default function Navbar() {
  return (
    <nav className="nav-bar flex justify-center">
      {displayNavItems(showNavbar)}
    </nav>
  )
}
