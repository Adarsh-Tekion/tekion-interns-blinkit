import {React, useState,useEffect} from 'react'
import Sidebar from './Sidebar/Sidebar.Module.js';
import Grid from './Card/Grid.Module.js';
import './Listing.Module.css';
import useData from './data.js';

function getItemsByCategory(category, items) {
    if(category=='all') {
        return items;
    }
    else {
        return items?.filter(({categories})=>categories.includes(category));
    }
}

export default function Listing() {
    const [category,setCategory] = useState('all');
    const data = useData();
    const products = getItemsByCategory(category, data.items);
    const onProduct = (id) => {
        setCategory(id);
    };
  return (
    <main className = "flex main">
        <Sidebar onProduct = {onProduct} />
        <Grid products = {products}/>
        </main>
  )
}
