import {
    items
 } from "./data_stub.js";
 import {
    create_text_container
 } from "./util.js";
 
 const cart_item_page = document.getElementById("added-items-cart");
 let keys = Object.keys(localStorage);
 const items_count = create_text_container("", []);
 cart_item_page.append(items_count);
 let count = 0;
 for (let key of keys) {
    const item_store = create_text_container("", []);
    for (let i = 0; i < items.length; i++) {
       if (items[i].id == key) {
          item_store.textContent = items[i].product_name + "   :   " + localStorage.getItem(key);
       }
       cart_item_page.append(item_store);
    }
    let num = Number(localStorage.getItem(key));
    count = count + num;
 }
 items_count.innerHTML = "Items: " + count;