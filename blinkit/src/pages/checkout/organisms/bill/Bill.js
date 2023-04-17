import React from 'react'
import './bill.css'
import { useSelector } from 'react-redux';
import UseDataFetch from '../../../../organisms/helpers/organism.dataFetch';
import { showCartItems } from '../../helpers/bill.showCartItems';
import { totalPrice } from '../../helpers/bill.totalPrice';
import { Loader } from '../../../../organisms/loader';
export default function Bill() {
    const count = useSelector((state) => state.changeNumber);
    const items = UseDataFetch("items")
    if (items.length == 0)
        return (<Loader />)
    else
        return (
            <div> {totalPrice(items, count) ?
                (<div className="bill">
                    <h1>Bill</h1>
                    <table className="cart-items">
                        <thead>
                            <tr>
                                <th className="item-name">Items</th>
                                <th className="item-qty">Qty</th>
                            </tr>
                        </thead>
                        <tbody>{showCartItems(items, count)}</tbody>
                        <thead>
                            <tr>
                                <th className="item-name">Grand Total</th>
                                <th className="item-qty">₹{totalPrice(items, count)}</th>
                            </tr>
                        </thead>
                    </table>
                </div>) : (<h3 className="empty-cart">Empty Cart</h3>)
            }
            </div>
        )
}
