import React from 'react';
import Home from './Home';
import Messenger from './Messenger';
import Issues from './Issues';
import SignUp from './SignUp';
import SignIn from './SignIn';
import axios from 'axios';
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
      currentId:'home',
      loggedOut: false,
      user: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/user")
    .then(res => {
      this.setState({
        user: res.data
      }, () => {
        console.log('who is the user?', this.state.user)
      })
    })
    .catch(err => console.error(err));
  }

  handleChange(event) {
    let e = event.target.getAttribute('id');
    this.setState((state) => ({ currentId: e }))
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

  render() {
    console.log(this.state.currentId)
    return (

      <Router>
        <div className="homepage">
          <div id="navbar">
            <div className="container">
              <div className="logo"></div>
              {this.state.loggedOut ? window.location.pathname="/signin" : null}
                <ul>
                  <li>
                    <Link id="home" to="/">Home</Link>
                  </li>
                  <li>
                    <Link id="issues"  to="/issues">Issues</Link>
                  </li>
                  <li>
                    <Link id="messenger"  to="/messenger">Chat</Link>
                  </li>
                  {!this.state.user ?
                    <li>
                      <Link id="sign-up"  to="/signup">Sign Up</Link>
                    </li>
                    :
                    <li>
                      <Link id="messenger" to="/messenger"onClick={this.loggedOut}>Log Out</Link>
                    </li>
                  }

                </ul>
            </div>
          </div>
          <Switch>
            <Route path="/messenger">
              <Messenger user={this.state.user} />
            </Route>
            <Route path="/issues">
              <Issues />
            </Route>
            <Route path="/signin">
              <SignIn user={this.state.user} componentDidMount={this.componentDidMount}/>
            </Route>
            <Route path="/SignUp">
              <SignUp />
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