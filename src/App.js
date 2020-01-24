import React from 'react';
import Home from './Home';
import Issues from './Issues';
import Users from './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId:'home'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let e = event.target.getAttribute('id');
    this.setState((state) => ({ currentId: e }))
  }
  render() {
    console.log(this.state.currentId)
    return (

      <Router>
        <div className="homepage">
          <div id="navbar">
            <div className="container">
              <div className="logo"></div>
                <ul>
                  <li>
                    <Link id="home" onClick={this.handleChange} className={
                      this.state.currentId === 'home' ? 'current' : 'none'
                    } to="/">Home</Link>
                  </li>
                  <li>
                    <Link id="issues" onClick={this.handleChange} className={
                      this.state.currentId === 'issues' ? 'current' : 'none'
                    } to="/issues">Issues</Link>
                  </li>
                  <li>
                    <Link id="users" onClick={this.handleChange} className={
                      this.state.currentId === 'users' ? 'current' : 'none'
                    } to="/users">Users</Link>
                  </li>
                </ul>
            </div>
          </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/issues">
              <Issues />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

};

export default App;