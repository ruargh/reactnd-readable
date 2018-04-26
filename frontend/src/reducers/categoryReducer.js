import { SUCCESS_LOAD_CATEGORIES, FAIL_LOAD_CATEGORIES } from '../actions'

const initialState = {
    status: {
        loading: true,
        error: false,
    },
}

const category = (state = initialState, action) => {
    
    const { categories } = action

    switch (action.type) {
        case FAIL_LOAD_CATEGORIES:
            return {
                ...state.category,
                status: {
                    loading: false,
                    error: true,
                },
            }
        case SUCCESS_LOAD_CATEGORIES:
            return {
                ...categories.map(
                    (category) => category
                ),
                status: {
                    loading: false,
                    error: false,
                },
            }

        default:
            return state
    }
}

export default category

/*
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
Reference: https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319

*/

