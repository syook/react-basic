import React, { Component } from 'react';
import { connect } from 'react-redux';

class TenantHome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h2>Welcome to the tenant {this.props.subdomain}</h2>
        </div>
        <div>
          <button onClick={() => this.props.history.push('/log_in')}>Log In</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ subdomain }) => ({ subdomain })

export default connect(mapStateToProps)(TenantHome);
