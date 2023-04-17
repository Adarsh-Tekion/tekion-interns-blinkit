import React from 'react'
import './cardSourcedAt.css'
import propTypes from 'prop-types'

function CardSourcedAt(props) {
  return (
    <div className = "source-btn">
      <p className="source justify-center">{props.children}</p>
      </div>
  )
}
CardSourcedAt.propsTypes={
  children: propTypes.string.isRequired
}

export default CardSourcedAt
