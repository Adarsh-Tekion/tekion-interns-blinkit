import React from 'react'
import './cardProductTitle.css'
import propTypes from 'prop-types'

function CardProductTitle(props) {
  return (
    <div className="product-title">
      <p>{props.children}</p>
    </div>
  )
}
CardProductTitle.propTypes={
  children: propTypes.string.isRequired
}
export default CardProductTitle