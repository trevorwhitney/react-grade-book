import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { ReduxRouter } from 'redux-router'
import {Route} from 'react-router';

import GradeBook from './components/GradeBook'
import App from './components/App'
import NewStudent from './components/NewStudent'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <Route path="students" component={GradeBook} />
        <Route path="students/new" component={NewStudent} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('grade-book')
)