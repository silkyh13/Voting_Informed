import React, { Component } from 'react';
import './Issues.css';
import data from "./data.js";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      issue: ''
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle (e) {
    this.setState({
      toggle:!this.state.toggle,
      issue: e.target.getAttribute('id')
    })
  }
  render() {
    return (

      <div id="issues">
        <div className="container">
          <div className="bernie-issues">
            <div className="info-left">
              <h3>Issues</h3>
              <h2>Bernie Sanders’s Stance</h2>
              <p>I’m running for president so that, when we are in the White House, the movement we build together can achieve economic, racial, social and environmental justice for all.</p>
            </div>
          </div>
        </div>

        <div className="container">
            {Object.keys(data).map((issue, i) =>
            <div key={i}>
              <hr></hr>
              <div className="issues-section">
              <div className="issue-name" id={issue} onClick={this.toggle}>{issue}</div>
              <ul id={issue} className={(this.state.toggle && this.state.issue === issue)? 'visible': 'sub-nav'}>
                {data[issue].map((item, index) =>
                  <li key={index}><i className="far fa-check-square fa-1x"></i> {item}</li>
                )}
              </ul>
              </div>
            </div>
            )}
        </div>
      </div>
    );
  }
}

export default Issues;
