import { convertTime } from '../utils/helpers'

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
            timestamp: Date.now(),
            voteScore:1,
            deleted:false,
            commentCount: 0,
          }
        ]
      case 'LOAD_POST':
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            body: action.body,
            author: action.author,
            category: action.category,
            //timestamp: convertTime(action.timestamp),
            timestamp: action.timestamp,
            voteScore: action.voteScore,
            deleted: action.deleted,
            commentCount: action.commentCount
          }
        ]
      case 'DELETE_POST':
        return state.map(post =>
          (post.id === action.id)
            ? {...post, deleted: !post.deleted}
            : post
        )
      case 'VOTE_POST_UP':
        return state.map(post =>
          (post.id === action.id)
            ? {...post, voteScore: (post.voteScore + 1) }
            : post
        )
      case 'VOTE_POST_DOWN':
        return state.map(post =>
          (post.id === action.id)
            ? {...post, voteScore: (post.voteScore - 1) }
            : post
        )
      default:
        return state
    }
  }
export default posts