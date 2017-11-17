import React, { Component } from 'react';
import Users from './Users';

class Dashboard extends Component {
  render() {
    return (
      <Users {...this.props} />
    );
  }
}

export default Dashboard;
