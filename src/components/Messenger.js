import React, { Component } from 'react';
import axios from 'axios';
import SignIn from './SignIn';

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

      <div>
        {this.state.loggedOut ? window.location.pathname="/signin" : null}
        <h1>BTS MUTHERFUCKR</h1>
        <button onClick={this.loggedOut}>Log out</button>

      </div>

    );

  }
}