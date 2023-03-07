import React from 'react'
import '../App.css';
import Card from "./Card.js";

export default function Grid(props) {
const rows = [];

for(let i=0;i<props.products.length;i+=4)
{
    const row = props.products.slice(i,i+4);
    rows.push(row);
}
  return (
      <div className="menu">
            <div className = "product-desc flex">
               <p className="title">Buy Fresh Vegetables Online</p>
               <form className="sort flex align-center">
                  <p><b>Sort By</b></p>
                  <select name="sort-by-filter" id="sort-by-filter">
                     <option value="Relevance">Relevance</option>
                     <option value="Price">Price</option>
                     <option value="Popularity">Popularity</option>
                  </select>
               </form>
            </div>
            <div className="card">
                { 
                rows.map((row,index) => (
               <div key = {index} className="row flex">
                {
                    row.map(item=>(
                     <Card key = {item.id} name={item}/>
                  ))
}
                  </div>
                ))
}
                  </div>
                  </div>
  )
}
