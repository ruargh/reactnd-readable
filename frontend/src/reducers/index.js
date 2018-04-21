import { GET_CATEGORIES } from '../actions'

function categories (state = null, action) {
  switch (action.type) {
    case GET_CATEGORIES :
      return state
    default :
      return state
    }
}


export default categories