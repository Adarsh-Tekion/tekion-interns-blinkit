import {
    items,
    categories
 } from "/data_stub.js";
 
 function create_img_container(img_url, classlist) {
    const img = document.createElement("img");
    img.src = img_url;
    for (let i = 0; i < classlist.length; i++)
       img.classList.add(classlist[i]);
 
    return img;
 }
 
 function create_text_container(text, classlist) {
    const text_cont = document.createElement("p");
    text_cont.textContent = text;
    for (let i = 0; i < classlist.length; i++)
       text_cont.classList.add(classlist[i]);
 
    return text_cont;
 }
 
 function create_container(cont, classlist) {
    const container = document.createElement(cont);
    for (let i = 0; i < classlist.length; i++)
       container.classList.add(classlist[i]);
    return container
 }
 
 function makesidebar(category) {
    const side_bar_list = create_container("li", ["side-bar-list", "flex"]);
    const side_bar_img = create_img_container(category.image_url, ["food-image"]);
    const side_bar_item = create_text_container(category.display_text, []);
    side_bar_item.style.fontWeight = "bold";
    side_bar_list.append(side_bar_img, side_bar_item);
    return side_bar_list;
 }
 
 function makeGrid(items) {
    const card = create_container("section", ["product"]);
    const discount = create_container("div", ["discount"]);
    const discount_text = create_text_container("10%", ["flex", "justify-center"]);
    discount.append(discount_text);
    card.append(discount);
    const prodcut_img_container = create_container("div", ["product-image-container", "flex", "justify-center"]);
    const product_img = create_img_container(items.image_url, ["align-center"]);
    prodcut_img_container.append(product_img);
    card.append(prodcut_img_container);
    const source_btn = create_container("div", ["source-btn"]);
    const source_btn_text = create_text_container("Sourced at 5AM", ["source", "justify-center"]);
    source_btn.append(source_btn_text);
    card.append(source_btn);
    const product_title = create_container("div", ["product-title"]);
    const product_title_name = create_text_container(items.product_name, []);
    product_title.append(product_title_name);
    card.append(product_title);
    const weight_style = create_container("div", ["weight-style"]);
    const weight = create_text_container("1kg", []);
    weight_style.append(weight);
    card.append(weight_style);
    const cart_grid = create_container("div", ["cart-grid", "flex"]);
    const price = create_container("p", ["price", "flex"]);
    cart_grid.append(price);
    const final_price = create_container("div", ["final-price"]);
    final_price.textContent = items.price;
    price.append(final_price);
    const cut_price = create_container("span", ["cut-price"]);
    cut_price.textContent = items.discount_price;
    cut_price.textDecorartion = "linethrough";
    price.append(cut_price);
    const cart_btn_container = create_container("div", ["cart-btn-container", "flex", "align-center"]);
    const cart_btn = create_container("button", []);
    cart_btn.textContent = "Add";
    cart_btn_container.append(cart_btn);
    cart_grid.append(cart_btn_container);
    card.append(cart_grid);
    return card;
 }
 
 const side_bar = document.getElementById("categories_items");
 for (let i = 0; i < categories.length; i++) {
    const bar = makesidebar(categories[i]);
    side_bar.append(bar);
 }
 const main = document.getElementById("card_items");
 for (let i = 0; i < items.length; i += 4) {
    const row = document.createElement("div");
    row.classList.add("row-card");
    for (let j = i; j < i + 4; j++) {
       const card = makeGrid(items[j]);
       row.append(card);
    }
    main.append(row);
 }