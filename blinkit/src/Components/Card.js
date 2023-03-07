import React, { useState } from 'react'
import '../App.css';

export default function Card(props) {

    const [count, setCount] = useState(0);
    const handleclick = (isadd) => {
        if (isadd ==true) {
            setCount(count + 1);
        }
        else {
            setCount(count - 1);
        }
    }
    return (
        <section className="product">
            <div className="discount">
                <p className="flex justify-center">10% OFF</p>
            </div>
            <div className="product-image-container justify-center"><img src={props.name.image_url} alt={props.name.product_name} className="align-center" /></div>
            <div className="source-btn">
                <p className="source justify-center">Sourced at 5AM</p>
            </div>
            <div className="product-title">
                <p>{props.name.product_name}</p>
            </div>
            <div className="weight-style flex">
                <p className="weight">1kg</p>
            </div>
            <div className="cart-grid flex">
                <p className="price flex"><span className="final-price">₹{props.name.price}</span>
                    <span className="cut-price">₹{props.name.discount_price}</span>
                </p>
                <div className="cart-btn-container align-center flex">
                    <>
                        {
                            count ? (
                                <div className="cart-btn-container align-center flex cart-btn">
                                    <button className="subtract-btn" onClick={ () => handleclick(false)}>-</button>
                                    <p className="count-show">{count}</p>
                                    <button className="add-btn" onClick={() => handleclick(true)}>+</button>
                                </div>
                            ) :
                                <button className="cart-btn-container align-center flex cart-btn" onClick={() => handleclick(true)}>ADD</button>
                        }
                    </>
                </div>
            </div>
        </section>
    )
}
