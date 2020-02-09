import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Messenger.css';
import {
  Link
} from "react-router-dom";
import io from 'socket.io-client';
const socket = io("http://localhost:3000");

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      message: '',
      messages: []
    }
  }

  componentDidMount() {
    //axios.get :)????
    axios.get('/api/message')
      .then(response => {
        // handle success
        console.log('meowwwwwwwwwwwwww', response.data)
        this.setState({
          messages: response.data
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(meow => {
        // always executed
      });

    // socket.on("chat-message", data => {
    //   let messages = this.state.messages;
    //   messages.push(data);
    //   this.setState({
    //     messages
    //   }, () => {
    //     console.log(this.state.messages);
    //   })
    // })
  }
  handleSubmit = (e) => {
    e.preventDefault(); // prevents page reloading
    axios.post('/api/message', {
      content: this.state.message
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        socket.emit('chat-message', { user: this.props.user, message: this.state.message });
      })

  }
  handleMessage = e => {
    this.setState({
      message: e.target.value
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

  render() {

    return (

      <div className="messenger">
        {this.props.userName ?
          <h1 className="header">WELCOME <span className="larger">{this.props.userName}</span></h1> :
          <h2><Link className="link" to="/signin">Sign in Here</Link></h2>
        }
        <ol className="messages">
          {this.state.messages.map((item, index) =>

            item.user.email === this.props.user.email ? (<li className="mine"><span>{item.message}<p>{item.createdAt.slice(11, 19)}</p></span></li>) :
              (<li><span><p>{item.user.firstName + ": "}</p>{item.message}<p>{item.createdAt.slice(11, 19)}</p></span></li>)
          )}
        </ol>

        <section id="message-form" className="padding-3">
          <div className="container">
            <form action="process.php">
              <div className="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" onChange={this.handleMessage}></textarea>
              </div>
              <button onClick={this.handleSubmit} type="submit" className="btn">Submit</button>
            </form>
          </div>
        </section>

      </div>
    );

  }
}