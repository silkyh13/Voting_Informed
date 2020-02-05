import React, { Component } from 'react';
import '../styles/SignUp.css';
import {
  Link
} from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      bullshit: false
    }

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  submitForm = () => {

    if (this.state.password === this.state.confirmPassword) {
      //axios post request
      //add this.state.firstName this.state.lastName this.state.email this.state.password
      axios.post('/api/user', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
      .then(res =>  {
        this.setState({
          bullshit: this.state.email
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    }
    else {
      document.getElementById("confirmPassword").setCustomValidity("Passwords don't match");
    }
  }

  render() {
    let signedUp = this.state.bullshit;
    console.log(signedUp, this.state.email)
    return (
      <div id="form-container">
        <div className="form-wrap">
          <h1>Sign Up</h1>
          <form>
            <div className="form-group">
              <label>First Name </label>
              <input type="text" id="firstName" onChange={this.handleRegister}></input>
            </div>

            <div className="form-group">
              <label>Last Name </label>
              <input type="text" id="lastName" onChange={this.handleRegister}></input>
            </div>

            <div className="form-group">
              <label>Email </label>
              <input type="email" id="email" onChange={this.handleRegister}></input>
            </div>

            <div className="form-group">
            <label>Password </label>
            <input type="password" id="password" onChange={this.handleRegister}></input>
            </div>

            <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" id="confirmPassword" onChange={this.handleRegister}></input>
            </div>
            {signedUp === this.state.email ? window.location.pathname="/signin" : <button onClick={this.submitForm} >Sign Up</button>}
          </form>

          <p className="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#" style={{color: "blue"}}> Terms & Conditions</a> and
            <a href="#" style={{color: "blue"}}> Privacy Policy</a>
          </p>
        </div>
        <footer>
          <p>Already have an account? <Link to="/signin">Sign in Here</Link></p>
        </footer>
      </div>
    );
  }
}

export default Signup;