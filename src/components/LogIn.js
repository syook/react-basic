import React, { Component } from 'react';
import { logIn } from './../api/logIn';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      emailErrorMessage: '',
      passwordErrorMessage: ''
    };
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  validateEmail = (e) => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.length === 0) {
      this.setState({ emailErrorMessage: 'Email is empty.' })
    } else if (!emailRegex.test(this.state.email)) {
      this.setState({ emailErrorMessage: 'Incorrect email.' })
    } else {
      this.setState({ emailValid: true })
    }
  }

  updatePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  validatePassword = (e) => {
    if (this.state.password.length === 0) {
      this.setState({ passwordErrorMessage: 'Password is empty.' })
    } else {
      this.setState({ passwordValid: true })
    }
  }

  submitForm = async (e) => {
    try {
      const logInResponse = await logIn(this.state)
      console.log(logInResponse);
      if (logInResponse.success) {
        this.props.history.push('/dashboard')
      } else {
        this.props.history.push('/log_in')
      }
    } catch (error) {
      console.log(error);
    }
    // this.validateEmail()
    // this.validatePassword()
    // if (!this.state.emailValid) { console.log(this.state.emailErrorMessage); }
    // if (!this.state.passwordValid) { console.log(this.state.passwordErrorMessage); }
    // console.log(this.state);
  }

  render() {
    return (
      <div style={{marginTop:'30px', marginLeft:'30px'}}>
        <div>
          <h2>Log In</h2>
        </div>

        <div>
          <label>Email</label><br/>
          <input type="email" onChange={this.updateEmail} onBlur={this.validateEmail} />
          {!this.state.emailValid ? <p>{this.state.emailErrorMessage}</p> : null}
        </div><br/>

        <div>
          <label>Password</label><br/>
          <input type="password" onChange={this.updatePassword} onBlur={this.validatePassword} />
          {!this.state.passwordValid ? <p>{this.state.passwordErrorMessage}</p> : null}
        </div><br/>

        <div>
          <button onClick={this.submitForm}>Log In</button>
        </div>
      </div>
    );
  }
}

export default LogIn;
