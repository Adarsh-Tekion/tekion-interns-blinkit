import React from 'react'
import './cardProductPrice.css'
import propTypes from 'prop-types'

function CardProductPrice(props) {
  return (
    <div className="price flex">
      <p className="final-price">{props.finalPrice}</p>
      <p className="cut-price">{props.cutPrice}</p>
    </div>
  )
}
CardProductPrice.propTypes={
  finalPrice: propTypes.number.isRequired,
  cutPrice: propTypes.number.isRequired
}
export default CardProductPrice