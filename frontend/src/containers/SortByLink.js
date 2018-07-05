import { connect } from 'react-redux'
import { setSortByOption } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.sortOption === state.sortByOption
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setSortByOption(ownProps.sortOption))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)