import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push('/log_in')}>Log In</button>
        <button onClick={() => this.props.history.push('/sign_up')}>Sign Up</button>
      </div>
    );
  }
}

export default Home;
