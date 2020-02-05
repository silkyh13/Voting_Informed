import React, { Component } from 'react';
import axios from "axios";

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSignIn = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm = event => {
    let isError = false;
    event.preventDefault();
    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      this.props.componentDidMount();
      console.log(response);
    })
    .catch(error => {
      if(error){
        isError=true;
      }
      console.log(error);
    })
    .finally(() => {
      // window.location.reload();
      console.log(isError);

    });
      if(isError){
        document.getElementById("password").setCustomValidity("Sign in error occurred");
      }

  }
  render () {
    return (
      <div id="form-container">
        {this.props.user ? window.location="/messenger" :
          <div className="form-wrap">
            <h1>Sign In</h1>
            <form>
              <div className="form-group">
                <label>Email </label>
                <input type="email" id="email" onChange={this.handleSignIn}></input>
              </div>

              <div className="form-group">
                <label>Password </label>
                <input type="password" id="password" onChange={this.handleSignIn}></input>
              </div>

              <button onClick={this.submitForm}>Sign In</button>
            </form>

          </div>
        }

      </div>
    )
  }
}

