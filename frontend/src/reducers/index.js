import { combineReducers } from 'redux'
import posts from './posts'
import categoryFilter from './categoryFilter'

export default combineReducers({
  posts,
  categoryFilter
})