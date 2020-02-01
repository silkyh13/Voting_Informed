import React, { Component } from 'react';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSignIn(event) {

  }

  submitForm() {

  }
  render () {
    return (
      <div id="form-container">
        <div className="form-wrap">
          <h1>Sign In</h1>

          <div className="form-group">
            <label>Email </label>
            <input type="email" id="email" onChange={this.handleSignIn}></input>
          </div>

          <div className="form-group">
            <label>Password </label>
            <input type="password" id="password" onChange={this.handleSignIn}></input>
          </div>
          <button onClick={this.submitForm}>Sign In</button>
        </div>
      </div>
    )
  }
}

