import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
      <div id="navbar">
        <div class="container">
          <h1 class="logo"></h1>
          <ul>
            <li><a>Home</a></li>
            <li><a>Issues</a></li>
            <li><a>Connect</a></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default About;