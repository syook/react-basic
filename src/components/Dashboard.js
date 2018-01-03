import React, { Component } from 'react';
import Users from './Users';
import { saveToken } from './../actions/saveToken';
import store from './../store';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  logOut = (e) => {
    localStorage.removeItem('token');
    window.location.reload();
    store.dispatch(saveToken(null));
  }

  render() {
    return (
      <div>
        <div><button onClick={this.logOut}>Logout</button></div>
        <Users
          {...this.props}
        />
      </div>
    );
  }
}

export default Dashboard;
