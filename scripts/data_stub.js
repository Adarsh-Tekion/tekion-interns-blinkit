const categories = [
    {
      "display_text": "Bread & Pav",
      "image_url": "https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png",
      "id": "953",
      "active": true,
      "product_count": 60,
      "action": {
          "url": "/listing?cat=953",
          "type": "open",
        }
    },
    {
      "display_text": "Eggs",
      "image_url": "https://cdn.grofers.com/app/images/category/cms_images/icon/1200_1657599895699.png",
      "id": "954",
      "active": true,
      "product_count": 10,
      "action": {
          "url": "/listing?cat=954",
          "type": "open",
        }
    },
    {
      "display_text": "Breakfast Cereal",
      "image_url": "https://cdn.grofers.com/app/images/category/cms_images/icon/954_1643384781001.png",
      "id": "955",
      "active": true,
      "product_count": 12,
      "action": {
          "url": "/listing?cat=955",
          "type": "open",
        }
    },
    {
      "display_text": "Panner and Tofu",
      "image_url": "https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png",
      "id": "956",
      "active": true,
      "product_count": 60,
      "action": {
          "url": "/listing?cat=956",
          "type": "open",
        }
    },
    {
      "display_text": "Milk",
      "image_url": "https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png",
      "id": "957",
      "active": true,
      "product_count": 160,
      "action": {
          "url": "/listing?cat=957",
          "type": "open",
        }
    },
  ];
  const items = [
    {
      "product_name": "Amul Taaza Toned Fresh Milk",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/19512a.jpg?ts=1647923044",
      "id": "1",
      "price": 27,
      "discount_price": 27,
      "currency": "INR",
      "categories": ["957"]
    },
    {
      "product_name": "Amul Gold Full Cream Fresh Milk",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/12872a.jpg",
      "price": 33,
      "discount_price": 33,
      "currency": "INR",
      "categories": ["957"],
      "id": "2",
    },
    {
      "product_name": "Eggoz Farm Fresh White Eggs (30 pieces)",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/477483a.jpg?ts=1662091836",
      "id": "3",
      "price": 370,
      "discount_price": 300,
      "currency": "INR",
      "categories": ["957"]
    },
    {
      "product_name": "Amul Paneer (Green)",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/329500a.jpg?ts=1662964180",
      "id": "4",
      "price": 70,
      "discount_price": 70,
      "currency": "INR",
      "categories": ["956"]
    },
    {
      "product_name": "Amul Paneer",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/192a.jpg?ts=1644908944",
      "id": "5",
      "price": 70,
      "discount_price": 60,
      "currency": "INR",
      "categories": ["956"]
    },
    {
      "product_name": "Malai Paneer",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/423857a.jpg?ts=1652351001",
      "id": "6",
      "price": 30,
      "discount_price": 30,
      "currency": "INR",
      "categories": ["956"]
    },
    {
      "product_name": "Taza Paneer",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/478895a.jpg",
      "id": "7",
      "price": 70,
      "discount_price": 30,
      "currency": "INR",
      "categories": ["956"]
    },
    {
      "product_name": "So-Lite Tofu",
      "image_url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/111387a.jpg?ts=1591007205",
      "id": "8",
      "price": 60,
      "discount_price": 46,
      "currency": "INR",
      "categories": ["956"]
    },
  ];
  const cart = {
    "lineItems": [
        {
          "id": "1",
          "name": "Amul Paneer",
          "quantity": 2,
          "price_per_unit": 149,
          "discounted_price_per_unit": 149,
        },
        {
          "id": "2",
          "name": "Tofu",
          "quantity": 2,
          "price_per_unit": 149,
          "discounted_price_per_unit": 149,
        }
    ],
    "currency": "INR",
    "total_mrp": 176,
    "total_discount": 133,
    "delivery_charge": 15,
    "grand_total": 143,
  };

  export {items, categories};