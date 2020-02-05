import React, { Component } from 'react';
import axios from "axios";
import '../styles/SignIn.css';
import signInImage from "../img/about1.jpg"
export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false
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
      console.log('does it work?')
    })
    .catch(error => {
      this.setState({
        error: true
      }, () => {
        console.log('what is state of error', this.state.error)
      })
      console.log(error, 'did it fail');
    })
    .finally(() => {
      // window.location.reload();
      console.log(isError);

    });
      // if(isError){
      //   document.getElementById("password").setCustomValidity("Sign in error occurred");
      // }

  }
  render () {

    return (
      <div id='sign-in'>
      <div id="sign-in-form-container">
        {this.props.user ? window.location="/messenger" :
        // sign in form
          <div className="sign-in-form-wrap">
            <h1>Sign In</h1>
            {this.state.error ? <div className='error-message'>Incorrect password or email</div> : null}

            <form>
              <div className="form-group">
                <label>Email </label>
                <input type="email" id="email" onChange={this.handleSignIn}></input>
              </div>

              <div className="form-group">
                <label>Password </label>
                <input type="password" id="password" onChange={this.handleSignIn}></input>
              </div>

              <button onClick={this.submitForm}>{this.state.error ? 'Retry' : 'Sign In'}</button>
            </form>

          </div>
        }

      </div>
        <div className='sign-in-image'></div>
      </div>

    )
  }
}


