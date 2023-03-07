import {React, useState} from 'react'
import {items} from './data_stub.js';
import Sidebar from './Sidebar.js';
import Grid from './Grid.js';


function fetchCategories(category)
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
    const [category,setCategory] = useState('all');
    const products = fetchCategories(category);

    const onProduct = (id) => {
        setCategory(id);
    };

  return (
    <main className = "flex">
        <Sidebar onProduct = {onProduct} />
        <Grid products = {products}/>
        </main>
  )
}
