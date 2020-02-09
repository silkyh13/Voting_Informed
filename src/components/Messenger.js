import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Messenger.css';
import {
  Link
} from "react-router-dom";
import io from 'socket.io-client';
const socket = io("http://localhost:3005");

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      message: '',
    }
  }


  handleMessage = e => {
    this.setState({
      message: e.target.value
    }, () => {
      console.log(this.state.message)
    })
  }

  loggedOut = event => {
    axios.get('/api/logout')
    .then(response => {
      // handle success
      this.setState({
        loggedOut: !this.state.loggedOut,
      })
      console.log(response);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(meow => {
      // always executed
    });
  }
  render () {

    return (

      <div className="messenger">
        {this.props.userName ?
          <h1 className="header">WELCOME <span className="larger">{this.props.userName}</span></h1> :
          <h2><Link className="link" to="/signin">Sign in Here</Link></h2>
        }
        <ol className="messages">
          <li className="mine"><span>Hi, babe!</span></li>
          <li className="mine"><span>I have something for you.</span></li>
          <li><span>What is it?</span></li>
          <li className="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li className="mine"><span>Sure, it’s yours.</span></li>
        </ol>

        <section id="message-form" className="padding-3">
          <div className="container">
            <form action="process.php">
              <div className="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" onChange={this.handleMessage}></textarea>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </section>

      </div>
    );

  }
}