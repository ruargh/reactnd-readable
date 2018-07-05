import React from 'react'
import FilterLink from '../containers/FilterLink'
import { CategoryFilters } from '../actions'

const CategoryList = () => (
  <div className="button-list">
    <span>Categories: </span>
    <FilterLink category={CategoryFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink category={CategoryFilters.SHOW_REACT}>
      React
    </FilterLink>
    <FilterLink category={CategoryFilters.SHOW_REDUX}>
      Redux
    </FilterLink>
    <FilterLink category={CategoryFilters.SHOW_UDACITY}>
      Udacity
    </FilterLink>
  </div>
)

export default CategoryList