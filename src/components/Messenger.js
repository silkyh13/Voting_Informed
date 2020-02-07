import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Messenger.css';
import io from 'socket.io-client';

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
    }
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
        <ol className="messages">
          <li className="mine"><span>Hi, babe!</span></li>
          <li className="mine"><span>I have something for you.</span></li>
          <li><span>What is it?</span></li>
          <li className="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li className="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Lorem ipsum dolor sit.</span></li>
          <li><span>Lorem, ipsum dolor.</span></li>
          <li className="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li className="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Wait right here.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
          <li className="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li className="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Wait right here.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
        </ol>
        <section id="message-form" className="padding-3">
          <div className="container">
            <form action="process.php">

              <div className="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message">sad</textarea>
              </div>

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </section>

      </div>
    );

  }
}