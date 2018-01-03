import React, { Component } from 'react';
import UserForm from './UserForm';
import { createUser } from './../api/users';
import { connect } from 'react-redux';

class UserNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      account_id: ''
    };
  }

  updateUserName = (e) => {
    this.setState({ username: e.target.value })
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  updatePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  updateAccountId = (e) => {
    this.setState({ account_id: e.target.value })
  }

  submitForm = async (e) => {
    try {
      const userResponse = await createUser(this.state, this.props.token, this.props.subdomain);
      if (userResponse.success) {
        this.props.history.goBack();
      } else {
        console.log('Error creating user');
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <UserForm
        formLabel='Add User'
        username={this.state.username}
        email={this.state.email}
        password={this.state.password}
        account_id={this.state.account_id}
        updateUserName={this.updateUserName}
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        updateAccountId={this.updateAccountId}
        submitForm={this.submitForm}
      />
    );
  }
}

const mapStateToProps = ({ token, subdomain }) => ({ token, subdomain })

export default connect(mapStateToProps)(UserNew);
