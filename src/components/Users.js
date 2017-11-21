import React, { Component } from 'react';
import { allUsers } from './../api/users';
import { connect } from 'react-redux';
import store from './../store';
import { fetchUsers } from './../actions/users';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount(){
    this.props.dispatch(fetchUsers())
    // try {
    //   const userResponse = await allUsers(this.props.token);
    //   store.dispatch(fetchUsers(userResponse));
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    console.log(this.props);
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
              { this.props.users.length && this.props.users.map((user, index) => (
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

const mapStateToProps = ({ token, users }) => ({ token, users })

export default connect(mapStateToProps)(Users);
