import React from 'react'
import './sortBy.css'
import propTypes from 'prop-types'
import { SortName } from '../../constants/grid.heading'
function SortBy(props) {
  return (
    <div className="product-desc flex">
      <p className="title">{props.children}</p>
      <form className="sort flex align-center">
        <p>{SortName}</p>
        <select name="sort-by-filter" id="sort-by-filter">
          <option value={props.sort[0]}>{props.sort[0]}</option>
          <option value={props.sort[1]}>{props.sort[1]}</option>
          <option value={props.sort[2]}>{props.sort[2]}</option>
        </select>
      </form>
    </div>
  )
}
SortBy.propTypes = {
  children: propTypes.string,
  sort: propTypes.array
}
export default SortBy
