import React, { Component } from 'react';
import { allUsers } from './../api/users';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentWillMount(){
    try {
      const userResponse = await allUsers();
      this.setState({users: userResponse});
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div style={{marginTop:'30px', marginLeft:'30px'}}>
        <div>
          <h1>Users List</h1>
          <button onClick={() => this.props.history.push('/users/new')}>New</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Account Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.state.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.account_id}</td>
                  <td><button onClick={() => this.props.history.push('/users/edit', { user })}>Edit</button></td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
