import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import * as actions from './actions'

function mapStateToProps(state) {
  const { students } = state
  return {
    students,
    q: state.router.location.query.q
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch),
    pushState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)