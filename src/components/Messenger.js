import React, { Component } from "react";
import axios from "axios";
import "../styles/Messenger.css";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import moment from "moment";
const socket = io("http://localhost:3000");
// const socket = io("http://ec2-18-222-232-90.us-east-2.compute.amazonaws.com:8080");
export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
      message: "",
      messages: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/message")
      .then(response => {
        // handle success
        this.setState(
          {
            messages: response.data
          },
          () => {
            const list = document.getElementsByClassName("messages")[0];
            list.scrollTop = list.scrollHeight;
            console.log(this.state.messages);
          }
        );
      })
      .catch(error => {
        // handle error
        console.log(error);
      });

    // always executed
    socket.on("chat-message", data => {
      let messages = this.state.messages;
      let element = document.getElementsByClassName("messages")[0];
      // element.scrollTop = element.scrollHeight;
      messages.push(data);
      this.setState(
        {
          messages
        },
        () => {
          const list = document.getElementsByClassName("messages")[0];
          //subtract more to get a bigger range.
          if (list.scrollTop >= element.scrollHeight - 700) {
            list.scrollTop = list.scrollHeight;
          } else {
          }

          console.log(this.state.messages);
        }
      );
    });
  }

  handleSubmit = e => {
    e.preventDefault(); // prevents page reloading
    axios
      .post("/api/message", {
        content: this.state.message
      })
      .then(function(response) {
        console.log(response.data.createdAt);
      })
      .catch(function(error) {
        console.log(error);
      });
    socket.emit("chat-message", {
      user: this.props.user,
      message: this.state.message,
      createdAt: moment().format("hh:MM a")
    });
  };
  handleMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  loggedOut = event => {
    axios
      .get("/api/logout")
      .then(response => {
        // handle success
        this.setState({
          loggedOut: !this.state.loggedOut
        });
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(meow => {
        // always executed
      });
  };

  render() {
    return (
      <div className="messenger">
        <div className="headers">
          {this.props.userName ? (
            <h1 className="header">
              WELCOME <span className="larger">{this.props.userName}</span>
            </h1>
          ) : (
            <h2>
              <Link className="name-of-user" to="/signin">
                Sign in Here
              </Link>
            </h2>
          )}
        </div>

        <ol className="messages">
          {this.state.messages.map((item, index) => {
            return item.user.email === this.props.user.email ? (
              <li className="mine">
                <span>
                  {item.message}
                  <p>{item.createdAt}</p>
                </span>
              </li>
            ) : (
              <li>
                <span>
                  <p>{item.user.firstName + ": "}</p>
                  {item.message}
                  <p>{item.createdAt}</p>
                </span>
              </li>
            );
          })}
        </ol>
        <div className={this.props.userName ? null : "margin-bottom"}></div>
        {this.props.userName ? (
          <section id="message-form">
            <div className="container">
              <form action="process.php">
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    onChange={this.handleMessage}
                  ></textarea>
                </div>
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}
