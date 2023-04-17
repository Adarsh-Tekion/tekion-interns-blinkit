import React from 'react'
import './cardProductWeight.css'
import propTypes from 'prop-types'
function CardProductWeight(props) {
  return (
    <div className="weight-style flex">
      <p className="weight">{props.children}</p>
    </div>
  )
}
CardProductWeight.propTypes={
  children: propTypes.string.isRequired
}
export default CardProductWeight