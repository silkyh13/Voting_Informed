import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Messenger.css';

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
        <ol class="messages">
          <li class="mine"><span>Hi, babe!</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li><span>What is it?</span></li>
          <li class="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li class="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Lorem ipsum dolor sit.</span></li>
          <li><span>Lorem, ipsum dolor.</span></li>
          <li class="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li class="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Wait right here.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
          <li class="mine"><span>Just a little something.</span></li>
          <li><span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span></li>
          <li class="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Wait right here.</span></li>
          <li><span>Lorem ipsum dolor sit amet consectetur adipisicing.</span></li>
        </ol>
      </div>
    );

  }
}