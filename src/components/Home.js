import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to SyookPro Demo</h2>
        </div>
        <div>
          {/* <button onClick={() => this.props.history.push('/log_in')}>Log In</button> */}
          <button onClick={() => this.props.history.push('/sign_up')}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Home;
