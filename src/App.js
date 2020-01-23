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

const App = () => {
  return (
    <Router>
      <div className="homepage">
        <div id="navbar">
          <div className="container">
            <div className="logo"></div>
              <ul>
                <li>
                  <Link className="current" to="/">Home</Link>
                </li>
                <li>
                  <Link to="/issues">Issues</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
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
};

export default App;