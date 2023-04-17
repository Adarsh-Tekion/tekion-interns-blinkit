import React from "react";
import styles from "./grid.module.css";
import { SortBy } from "./molecules/sortBy";
import { cardNumber } from "./helpers/grid.cardNumber";
import { showMappedRow } from "./helpers/grid.showMappedRow";
import { heading, sortby } from "./constants/grid.heading";
import propTypes from 'prop-types'
function Grid(props) {
  const rows = cardNumber(props.categorizedItems)
  return (
    <div className={styles["menu"]}>
      <SortBy children={heading} sort={sortby} />
      <div className="card">
        {
          showMappedRow(rows)
        }
      </div>
    </div>
  );

}
Grid.propTypes = {
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
export default Grid
