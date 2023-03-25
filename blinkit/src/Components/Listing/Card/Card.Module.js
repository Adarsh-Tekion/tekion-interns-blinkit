import React, { useState } from 'react'
import './Card.Module.css';
import Button from '../../Img_Btn_Wrapper/Button.js';
import Image from '../../Img_Btn_Wrapper/Image.js';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../../../actions/index.js';

export default function Card(props) {

    const count = useSelector( (state) =>state.changeNumber[props.name.id-1]); 
    const dispatch = useDispatch();
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
                                     <Button styles= "subtract-btn" onclick = {() => dispatch(decNumber(props.name.id))} children = "-"/>
                    
                                    <p className="count-show">{count}</p>
                                    <Button styles= "add-btn" onclick = {() => dispatch(incNumber(props.name.id))} children = "+"/>
                                    
                                </div>
                            ) :
                            <Button styles= "cart-btn-container align-center flex cart-btn" onclick = {() => dispatch(incNumber(props.name.id))} children = "ADD"/>
                        }
                    </>
                </div>
            </div>
        </section>
    )
}
