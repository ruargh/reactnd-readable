import { CategoryFilters } from '../actions'

const categoryFilter = (state = CategoryFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
      return action.category
    default:
      return state
  }
}

export default categoryFilter