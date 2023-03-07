import React from 'react'
import '../App.css';
import {
    categories
 } from "./data_stub.js";

export default function Sidebar({onProduct}) {
  return (
     <ul className="side-bar">
        {
        categories.map(category =>(
            <li key = {category.id} className="side-bar-list flex" onClick={()=>onProduct(category.id)}>
               <img src={category.image_url} alt="All" className="food-image"/>
               <p>
                 {category.display_text}
               </p>
            </li>
            ))
        }
        </ul>
  )
}
