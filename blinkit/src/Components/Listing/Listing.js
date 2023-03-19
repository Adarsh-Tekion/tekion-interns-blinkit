import {React, useState, useEffect} from 'react'
import Sidebar from './Sidebar/Sidebar.Module.js';
import Grid from './Card/Grid.Module.js';
import './Listing.Module.css';

function fetchCategories(category,items)
{
    if(category==='all')
    {
        return items;
    }
    else
    {
        return items?.filter(({categories})=>categories.includes(category));
    }
}
export default function Listing() {
    const [items, setItems] = useState([]);
    const [category,setCategory] = useState('all');

    const fetchItems = () => { fetch('http://localhost:3002/items')
         .then(res => res.json())
         .then(({items}) => {setItems([...items])})
        }
        useEffect(() => { fetchItems() }, []);

    const products = fetchCategories(category,items);

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
