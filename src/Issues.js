import React, { Component } from 'react';
import './Issues.css';
import issues1 from "./img/issues1.jpeg";

class Issues extends Component {
  render() {
    return (

      <div id="issues">
        <div className="issues-info">
          <div className="info-left">
            <h3>Issues</h3>
            <h2>Bernie Sanders’s Stance</h2>
            <p>I’m running for president so that, when we are in the White House, the movement we build together can achieve economic, racial, social and environmental justice for all.</p>
          </div>
        </div>

        <div id="home-info">
          <div className="container">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Issues;