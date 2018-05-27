const API_URL = `http://localhost:3001`

  export function fetchPosts() {
    const url = `${API_URL}/posts`   
  return fetch(
      url,
        {
            method: 'GET',
            headers: {
                'Authorization': 'whatever-you-want',
                'Accept': 'application/json'
            },
        } )
        .then( (res) => res.json())
  }