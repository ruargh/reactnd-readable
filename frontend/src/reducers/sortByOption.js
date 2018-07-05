import { SortByOptions } from '../actions'

const sortByOption = (state = SortByOptions.TIMESTAMP, action) => {
  switch (action.type) {
    case 'SET_SORT_OPTION':
      return action.sortOption
    default:
      return state
  }
}

export default sortByOption