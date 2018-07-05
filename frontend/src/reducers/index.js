import { combineReducers } from 'redux'
import posts from './posts'
import categoryFilter from './categoryFilter'
import sortByOption from './sortByOption'

export default combineReducers({
  posts,
  categoryFilter,
  sortByOption
})