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
    side_bar_list.setAttribute("id", category.id);
    const side_bar_img = create_img_container(category.image_url, ["food-image"]);
    side_bar_img.setAttribute("id", category.id);
    const side_bar_item = create_text_container(category.display_text, ["category-text"]);
    side_bar_item.setAttribute("id", category.id);
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
    final_price.textContent = `₹${items.price}`;
    price.append(final_price);
    const cut_price = create_container("span", ["cut-price"]);
    cut_price.textContent = `₹${items.discount_price}`;
    cut_price.textDecorartion = "linethrough";
    price.append(cut_price);

    const cart_btn_container = create_container("div", ["cart-btn-container", "flex", "align-center", "justify-center"]);
    const cart_btn = create_container("button", ["cart-btn", "justify-center", "flex"]);
    cart_btn.textContent = "Add";
    cart_btn_container.append(cart_btn);
    cart_btn.setAttribute("id", items.id);
    cart_btn.addEventListener("click", showcount);
    cart_grid.append(cart_btn_container);
    card.append(cart_grid);

    return card;
}
const side_bar = document.getElementById("categories_items");
for (let i = 0; i < categories.length; i++) {
    const bar = makesidebar(categories[i]);
    bar.addEventListener("click", onClick);
    side_bar.append(bar);
}
const main = document.getElementById("card_items");
let row = create_container("div", ["row-card"]);
for (let j = 0, count = 0; j < items.length; j++) {
    const card = makeGrid(items[j]);
    row.append(card);
    count++;
    if (count == 4) {
        main.append(row);
        row = create_container("div", ["row-card"]);
        count = 0;
    }
}
main.append(row);

function removeGrid(grid) {
    grid.replaceChildren();
}

function BuildCard(main, event) {
    let row = create_container("div", ["row-card"]);
    for (let j = 0, count = 0; j < items.length; j++) {
        if (items[j].categories[0] == event.target.id) {
            const card = makeGrid(items[j]);
            row.append(card);
            count++;
        }
        if (count == 4) {
            main.append(row);
            row = create_container("div", ["row-card"]);
            count = 0;
        }
    }
    main.append(row);
}

function onClick(event) {
    removeGrid(main);
    BuildCard(main, event);
}

let elementcount = new Map();

function showcount(event) {
    let id = event.target.id;
    let cart_btn = document.getElementById(id);
    let sub_btn = create_container("button", ["subtract-btn"]);
    let count_show = create_container("div", ["count-show"]);
    let add_btn = create_container("button", ["add-btn"]);
    if (elementcount.has(id) == false) {
        elementcount.set(id, 0);
    }
    count_show.innerHTML = elementcount.get(id);
    count_show.setAttribute("id", id); //without adding attribute to this div, it is showing error, I dont know why
    sub_btn.innerText = "-";
    sub_btn.setAttribute("id", id);
    add_btn.setAttribute("id", id);
    sub_btn.addEventListener("click", sub_item);
    add_btn.innerText = "+";
    add_btn.addEventListener("click", add_item);
    cart_btn.replaceChildren(sub_btn, count_show, add_btn);
}

function sub_item(event) {
    let id = event.target.id;
    if (elementcount.has(id) == true && elementcount.get(id) > 0) {
        elementcount.set(id, elementcount.get(id) - 1);
        for (let i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                count_added_items--;
                add_to_cart_builder(items[i].product_name, count_added_items, false);
            }
        }
    }
}

function add_item(event) {
    let id = event.target.id;
    if (elementcount.has(id) == true) {
        elementcount.set(id, elementcount.get(id) + 1);
    } else {
        elementcount.set(id, 1);
    }
    for (let i = 0; i < items.length; i++) {

        if (items[i].id == id) {
            count_added_items++;
            add_to_cart_builder(items[i].product_name, count_added_items, true);
        }
    }
}
let count_added_items = 0;
const added_item = document.getElementById("added-items");
const count_div = create_text_container("", []);
added_item.append(count_div);

function add_to_cart_builder(item, count, isappend) {
    if (isappend == true) {
        let cart_item = create_text_container(item, []);
        added_item.append(cart_item);
        let cart_item_div = create_container("div", ["flex-column", "align-center"]);
        cart_item_div.append(cart_item);

        added_item.append(cart_item_div);
    } else {
        for (var i = 0; i < added_item.children.length; i++) {

            if (added_item.children[i].textContent == item) {
                added_item.removeChild(added_item.children[i]);
                break;
            }
        }
    }
    count_div.innerText = "Items: " + count;
}

const cart_page = document.getElementById("cart-page");
cart_page.addEventListener("click", redirect_cart_page);

function redirect_cart_page() {
    location.href = "cart.html";
}