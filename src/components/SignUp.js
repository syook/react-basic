import React, { Component } from 'react';
import { createAccount } from './../api/signUp';
import { saveSubdomain } from './../actions/saveSubdomain';
import store from './../store';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business_name: '',
      username: '',
      email: '',
      password: '',
      subdomain: ''
    };
  }

  updateBusinessName = (e) => {
    this.setState({ business_name: e.target.value });
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

  updateSubdomain = (e) => {
    this.setState({ subdomain: e.target.value })
  }

  submitForm = async (e) => {
    try {
      const signUpResponse = await createAccount(this.state)
      console.log(signUpResponse);
      if (signUpResponse.success) {
        const subdomain = signUpResponse.account.subdomain;
        store.dispatch(saveSubdomain(subdomain));
        this.setState({subdomain: subdomain});
        const url = 'http://' + subdomain + '.' + window.location.host;
        // this.props.history.push(url)
        window.location = url;
      } else {
        this.props.history.push('/sign_up')
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(this.state);
  }

  render() {
    return (
      <div style={{marginTop:'30px', marginLeft:'30px'}}>
        <div>
          <h2>Create Account</h2>
        </div>

        <div>
          <label>Business Name</label><br/>
          <input type="text" onChange={this.updateBusinessName} />
        </div><br/>

        <div>
          <label>User Name</label><br/>
          <input type="text" onChange={this.updateUserName} />
        </div><br/>

        <div>
          <label>Email</label><br/>
          <input type="email" onChange={this.updateEmail} />
        </div><br/>

        <div>
          <label>Password</label><br/>
          <input type="password" onChange={this.updatePassword} />
        </div><br/>

        <div>
          <label>Subdomain</label><br/>
          <input type="text" onChange={this.updateSubdomain} />
        </div><br/>

        <div>
          <button type="submit" onClick={this.submitForm}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
