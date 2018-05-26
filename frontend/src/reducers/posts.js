const posts = (state = [], action) => {
    switch (action.type) {
      case 'ADD_POST':
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            body: action.body,
            author: action.author,
            category: action.category,
            timestamp: '2018-01-01 12:00',
            voteScore:1,
            deleted:false
          }
        ]
      case 'DELETE_POST':
        return state.map(post =>
          (post.id === action.id)
            ? {...post, deleted: !post.deleted}
            : post
        )
      default:
        return state
    }
  }
export default posts