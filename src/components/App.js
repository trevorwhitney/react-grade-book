import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import connectComponent from '../connectComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }

  render() {
    const links = [
      '/',
      '/students',
      '/students/new'
    ].map((l, i) =>
      <li key={`link${i}`}>
        <Link to={l}>{l}</Link>
      </li>
    );

    return (
      <div>
        <h1>App Container</h1>
        <ul>
          {links}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default connectComponent(App)
