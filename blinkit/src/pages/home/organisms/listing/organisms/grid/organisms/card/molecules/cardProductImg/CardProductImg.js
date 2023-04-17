import React from 'react'
import './cardProductImg.css'
import propTypes from 'prop-types'
function CardProductImg(props) {
  return (
    <div className="product-image-container justify-center">
      <img src = {props.source} alt = {props.alternate} className="align-center"/>
    </div>
  )
}
CardProductImg.propTypes={
  source: propTypes.string,
  alternate: propTypes.string,
}
export default CardProductImg