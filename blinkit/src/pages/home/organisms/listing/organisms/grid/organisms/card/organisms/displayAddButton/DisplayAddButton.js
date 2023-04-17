import React from 'react'
import { Button } from '../../../../../../../../../../atoms/button';
import { useSelector, useDispatch } from 'react-redux';
import { handleOnClick } from './helpers/card.handleOnClick';
export default function DisplayAddButton(props) {
    const count = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <div className="cart-btn-container align-center flex">
            {count.get(props.id) ? (
                <div className="cart-btn-container align-center flex cart-btn">
                    <Button
                        styles="subtract-btn"
                        onclick={() => handleOnClick("sub", dispatch, props.id)}
                        children="-"
                    />
                    <p className="count-show">
                        {count.get(props.id)}
                    </p>
                    <Button
                        styles="add-btn"
                        onclick={() => handleOnClick("add", dispatch, props.id)}
                        children="+"
                    />
                </div>
            ) : (
                <Button
                    styles="cart-btn-container align-center flex cart-btn"
                    onclick={() => handleOnClick("add", dispatch, props.id)}
                    children="ADD"
                />
            )}
        </div>

    )
}
