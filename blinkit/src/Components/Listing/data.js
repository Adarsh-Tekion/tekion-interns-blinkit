import {useState, useEffect} from 'react'

export default function useData() {
    const [items, setItems] = useState([]);
    const fetchItems = () => { fetch('http://localhost:3002/items')
    .then(res => res.json())
    .then(({items}) => {setItems([...items])})
   }
   useEffect(() => {fetchItems() }, []);
  return {items};
}
