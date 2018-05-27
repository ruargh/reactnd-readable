import { connect } from 'react-redux'
import { deletePost, votePostUp, votePostDown } from '../actions'
import PostList from '../components/PostList'
import { CategoryFilters } from '../actions'

const getVisiblePosts = (posts, category) => {
  switch (category) {
    case CategoryFilters.SHOW_ALL:
      return posts
    case CategoryFilters.SHOW_REACT:
      return posts.filter(t => t.category === "React")
    case CategoryFilters.SHOW_REDUX:
      return posts.filter(t => t.category === "Redux")
    case CategoryFilters.SHOW_UDACITY:
      return posts.filter(t => t.category === "Udacity")
    default:
      throw new Error('Unknown Category: ' + category)
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.categoryFilter)
})

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  votePostUp: id => dispatch(votePostUp(id)),
  votePostDown: id => dispatch(votePostDown(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)