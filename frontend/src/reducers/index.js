import { GET_CATEGORIES } from '../actions'

function categories (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES :

      let c = 
        fetch( `http:localhost:3001/categories`, {
          headers: { 'Authorization': 'whatever-you-want' }
        } )
        .then( (res) => res.json())
        .then( ({categories}) => categories.map( ( category ) => category ))
      return c
      


    default :
      return state
    }
}


export default categories