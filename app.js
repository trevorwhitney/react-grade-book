import React from 'react';
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import configureStore from './configureStore'
import * as actions from './actions'

import GradeBook from './components/GradeBook'


function mapStateToProps(state) {
  const { students } = state
  return {
    students
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(GradeBook)
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('grade-book')
)