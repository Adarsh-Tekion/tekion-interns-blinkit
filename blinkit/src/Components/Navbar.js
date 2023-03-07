import React from 'react'
import '../App.css';

export default function Navbar() {
  return (
    <nav className="nav-bar flex justify-center">
    <a href="/vegetables_fruits/" className="bar">Vegetables & Fruits</a>
    <a href="/dairy_breakfast/" className="bar">Dairy & Breakfast</a>
    <a href="/munchies/" className="bar">Munchies</a>
    <a href="/cold_drinks_juices/" className="bar">Cold Drinks & Juices</a>
    <a href="/instant_frozen_food/" className="bar">Instant & Frozen Food</a>
    <a href="/tea_coffee_health_drink/" className="bar">Tea, Coffee & Health Drinks</a>
    <a href="/bakery_biscuits/" className="bar">Bakery & Biscuits</a>
    <a href="/more/" className="bar">More</a>
 </nav>
  )
}
