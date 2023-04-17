import React from 'react'
import './sidebar.Module.css';
import UseDataFetch from '../../../../../../organisms/helpers/organism.dataFetch';
import { DisplaySideBar } from './helpers/sidebar.displaySidebar';
import propTypes from 'prop-types';
function Sidebar({ setCategoryId }) {
   const Categories = UseDataFetch("categories");
   return (
      <ul className="side-bar">
         {
            DisplaySideBar(Categories, setCategoryId)
         }
      </ul>
   )
}
Sidebar.propTypes = {
   setCategoryId: propTypes.func.isRequired
}
export default Sidebar


