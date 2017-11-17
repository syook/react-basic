import React, { Component } from 'react';
import UserForm from './UserForm';
import { updateUser } from './../api/users';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    const user = this.props.location.state.user;
    this.state = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      account_id: user.account_id
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
    // console.log(this.state);
    try {
      const userResponse = await updateUser(this.state);
      console.log(userResponse);
      if (userResponse.success) {
        this.props.history.goBack();
      } else {
        this.props.history.push('/users/edit')
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <UserForm
        formLabel='Edit User'
        userName={this.state.username}
        email={this.state.email}
        password={this.state.password}
        accountId={this.state.account_id}
        updateUserName={this.updateUserName}
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}
        updateAccountId={this.updateAccountId}
        submitForm={this.submitForm}
      />
    );
  }
}

export default UserEdit;
