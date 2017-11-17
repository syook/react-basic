import React, { Component } from 'react';
import Users from './Users';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Users
        {...this.props}
      />
    );
  }
}

export default Dashboard;
