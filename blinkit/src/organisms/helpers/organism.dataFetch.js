import { useState, useEffect } from "react";
export default function UseDataFetch(listCategory) {
  const [items, setItems] = useState([]);
  const fetchItems = () => {
    fetch(`http://localhost:3002/${listCategory}`)
      .then((items) => items.json())
      .then((items) => setItems([...items[listCategory]])
      );
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return items;
}