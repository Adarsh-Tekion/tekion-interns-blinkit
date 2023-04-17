import React from "react";
import "./card.Module.css";
import { CardDiscountTag } from "./molecules/cardDiscountTag";
import { CardProductImg } from "./molecules/cardProductImg";
import { CardProductPrice } from "./molecules/cardProductPrice";
import { CardProductTitle } from "./molecules/cardProductTitle";
import { CardProductWeight } from "./molecules/cardProductWeight";
import { CardSourcedAt } from "./molecules/cardSourcedAt";
import { Discount, Sourced, Weight } from "./constants/card.cardTags";
import {DisplayAddButton} from './organisms/displayAddButton'
import { ReaderItem } from "../../../../../../../../organisms/constants/itemReader";
import propTypes from 'prop-types'

function Card(props) {
  return (
    <section className="cart">
      <CardDiscountTag children={Discount} />
      <CardProductImg source={ReaderItem.getImageUrl(props.ProductInfo)} alternate={ReaderItem.getProductName(props.ProductInfo)} />
      <CardSourcedAt children={Sourced} />
      <CardProductTitle children={ReaderItem.getProductName(props.ProductInfo)} />
      <CardProductWeight children={Weight} />
      <div className="cart-grid flex">
        <CardProductPrice finalPrice={ReaderItem.getDiscountPrice(props.ProductInfo)}
          cutPrice={ReaderItem.getPrice(props.ProductInfo)} />
        <DisplayAddButton id={ReaderItem.getId(props.ProductInfo)} />
      </div>
    </section>
  );
}
Card.propTypes = {
  categorizedItems: propTypes.arrayOf(
    propTypes.shape({
      categories: propTypes.array,
      currency: propTypes.string.isRequired,
      discount_price: propTypes.number.isRequired,
      id: propTypes.string,
      image_url: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      product_name: propTypes.string.isRequired
    })
  )
}
export default Card
