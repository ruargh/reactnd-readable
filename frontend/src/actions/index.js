export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const VOTE_POST_UP = 'VOTE_POST_UP';
export const VOTE_POST_DOWN = 'VOTE_POST_DOWN';

export const setCategoryFilter = (category) => {
    return {
        type: 'SET_CATEGORY_FILTER',
        category
    }
}


let nextPostID = 0
export const addPost = (title, body, author, category) => {
    return {
        type: ADD_POST,
        id: nextPostID++,
        title, body, author, category
    }
}

export const deletePost = (id) => {
    console.log('delete post:' + id);
    return {
        type: DELETE_POST,
        id
    }
}

export const votePostUp = (id) => {
    console.log('vote up post:' + id);
    return {
        type: VOTE_POST_UP,
        id
    }
}
export const votePostDown = (id) => {
    console.log('vote down post:' + id);
    return {
        type: VOTE_POST_DOWN,
        id
    }
}


export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_REACT: 'SHOW_REACT',
    SHOW_REDUX: 'SHOW_REDUX',
    SHOW_UDACITY: 'SHOW_UDACITY'
  }