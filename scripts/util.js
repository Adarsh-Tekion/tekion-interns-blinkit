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
 
 export {
    create_container,
    create_img_container,
    create_text_container
 };