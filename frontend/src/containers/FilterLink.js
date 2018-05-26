import { connect } from 'react-redux'
import { setCategoryFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.category === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setCategoryFilter(ownProps.category))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)