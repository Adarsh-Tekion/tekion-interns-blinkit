import React, { useState } from 'react'
import './Card.Module.css';
import Button from '../../Img_Btn_Wrapper/Button.js';
import Image from '../../Img_Btn_Wrapper/Image.js';

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
            <div className="product-image-container justify-center">
            <Image source = {props.name.image_url} alternate = {props.name.product_name} styles = "align-center"/>
            </div>
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
                                     <Button styles= "subtract-btn" onclick = {() => handleclick(false)} children = "-"/>
                                    <p className="count-show">{count}</p>
                                    <Button styles= "add-btn" onclick = {() => handleclick(true)} children = "+"/>
                                    
                                </div>
                            ) :
                                <Button styles= "cart-btn-container align-center flex cart-btn" onclick = {() => handleclick(true)} children = "ADD"/>
                        }
                    </>
                </div>
            </div>
        </section>
    )
}
