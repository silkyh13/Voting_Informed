import React, { Component } from 'react';
import './Users.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    let match = useRouteMatch();
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  submitForm() {
    // this.props.addAttendee(this.state);
    if (this.state.password === this.confirmPassword) {
      console.log(this.state)
    }

  }

  render() {

    console.log(this.state)
    return (
      <div id="form-container">
        <div className="form-wrap">
          <h1>Sign Up</h1>
          <div class="form-group">
            <label>First Name </label>
            <input type="text" id="firstName" onChange={this.handleRegister}></input>
          </div>

          <div class="form-group">
            <label>Last Name </label>
            <input type="text" id="lastName" onChange={this.handleRegister}></input>
          </div>

          <div class="form-group">
            <label>Email </label>
            <input type="email" id="email" onChange={this.handleRegister}></input>
          </div>

          <div class="form-group">
          <label>Password </label>
          <input type="password" id="password" onChange={this.handleRegister}></input>
          </div>

          <div class="form-group">
          <label>Confirm Password</label>
          <input type="password" id="confirmPassword" onChange={this.handleRegister}></input>
          </div>

          <button onClick={this.submitForm}>Sign Up</button>
          <p class="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#" style={{color: "blue"}}> Terms & Conditions</a> and
            <a href="#" style={{color: "blue"}}> Privacy Policy</a>
          </p>
        </div>
        <footer>
        <p>Already have an account? <a href="#" >Login Here</a></p>
      </footer>
      </div>
    );
  }
}

export default Users;