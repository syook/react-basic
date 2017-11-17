import React, { Component } from 'react';
import Users from './Users';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  logOut = (e) => {
    localStorage.removeItem('token');
    window.location.reload();
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
