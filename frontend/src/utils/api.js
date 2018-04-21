const API_URL = `http://localhost:3001`
const HEADERS = {
    'Accept' : 'application/json',
    'Authorization' : 'whatever-you-want'
}

export const getCategories = () =>
    fetch( `${API_URL}/categories`, { HEADERS })
    .then(res => res.json())
    .then(data => data.categories)