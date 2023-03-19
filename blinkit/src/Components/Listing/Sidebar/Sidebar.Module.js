import React, {useState, useEffect} from 'react'
import './Sidebar.Module.css';
import Image from '../../Img_Btn_Wrapper/Image.js';

export default function Sidebar({onProduct}) {

   const [categories, setCat] = useState([]);

   const fetCat = () => { fetch('http://localhost:3002/categories')
   .then(res => res.json())
   .then(({categories}) => {setCat([...categories])})
  }
  useEffect(() => { fetCat() }, []);
  return (
     <ul className="side-bar">
        {
        categories.map(category =>(
            <li key = {category.id} className="side-bar-list flex" onClick={()=>onProduct(category.id)}>
               <Image source={category.image_url} alternate = "All" styles = "food-image"/>
               <p>
                 {category.display_text}
               </p>
            </li>
            ))
        }
        </ul>
  )
}
