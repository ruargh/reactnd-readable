import { connect } from 'react-redux'
import { deletePost, votePostUp, votePostDown } from '../actions'
import PostList from '../components/PostList'
import { CategoryFilters } from '../actions'
import sortBy from 'sort-by'

const getVisiblePosts = (posts, category, sortOption) => {
  switch (category) {
    case CategoryFilters.SHOW_ALL:
      return posts.filter( d => d.deleted === false).sort(sortBy(sortOption))
    case CategoryFilters.SHOW_REACT:
      return posts.filter(t => t.category === "react").filter( d => d.deleted === false).sort(sortBy(sortOption))
    case CategoryFilters.SHOW_REDUX:
      return posts.filter(t => t.category === "redux").filter( d => d.deleted === false).sort(sortBy(sortOption))
    case CategoryFilters.SHOW_UDACITY:
      return posts.filter(t => t.category === "udacity").filter( d => d.deleted === false).sort(sortBy(sortOption))
    default:
      throw new Error('Unknown Category: ' + category)
  }
}

const mapStateToProps = state => ({
  posts: getVisiblePosts(state.posts, state.categoryFilter, state.sortByOption)
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