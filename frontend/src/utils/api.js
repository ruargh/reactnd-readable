const API_URL = `http://localhost:3001`

export const getCategories = () =>
    fetch( `${API_URL}/categories`, {
            headers: { 'Authorization': 'whatever-you-want' }
        } )
    .then( (res) => res.json())
    .then( ({categories}) => categories.map( ( category ) => category ))