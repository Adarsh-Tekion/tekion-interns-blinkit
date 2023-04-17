import React from 'react'
import './cardDiscountTag.css'
import propTypes from 'prop-types'

function CardDiscountTag(props) {
  return (
    <div className="discount">
      <p className="flex justify-center">{props.children}</p>
</div>
  )
}
CardDiscountTag.propTypes={
  children: propTypes.string
}
export default CardDiscountTag
