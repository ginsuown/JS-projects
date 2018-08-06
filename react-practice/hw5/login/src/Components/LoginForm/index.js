import React, { Component } from "react";
import "./index.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: "",
      password: "",
      incorrect: false
    };
  }

  //parse username and password for correctness
  correctPassword(username, password) {
    let today = new Date();
    switch (username) {
      case "today":
        if (
          password ===
          today.getFullYear().toString() +
            (today.getMonth() + 1).toString().padStart(2, "0") +
            today
              .getDate()
              .toString()
              .padStart(2, "0")
        ) {
          return true;
        } else {
          return false;
        }
      case "tomorrow":
        if (
          password ===
          today.getFullYear().toString() +
            (today.getMonth() + 1).toString().padStart(2, "0") +
            (today.getDate() + 1).toString().padStart(2, "0")
        ) {
          return true;
        } else {
          return false;
        }
      case "yesterday":
        if (
          password ===
          today.getFullYear().toString() +
            (today.getMonth() + 1).toString().padStart(2, "0") +
            (today.getDate() - 1).toString().padStart(2, "0")
        ) {
          return true;
        } else {
          return false;
        }
      default:
        return false;
    }
  }

  //update state for controlled component username
  usernameChange = e => {
    this.setState({ username: e.target.value });
  };

  //update state for controlled component password
  passwordChange = e => {
    this.setState({ password: e.target.value });
  };

  //execute login if credentials are correct
  login = () => {
    if (this.correctPassword(this.state.username, this.state.password)) {
      this.setState({
        loggedIn: true,
        incorrect: false,
        username: "",
        password: ""
      });
    } else {
      this.setState({ incorrect: true });
    }
  };

  //logout
  logout = () => {
    this.setState({ loggedIn: false });
  };

  //generate JSX dependent on login state
  loginFields = () => {
    if (!this.state.loggedIn) {
      return (
        <p>
          Username<br />
          <input type="text" onChange={this.usernameChange} />
          <br />
          Password<br />
          <input type="password" onChange={this.passwordChange} />
          <br />
          <button onClick={this.login}>Login</button>
        </p>
      );
    } else {
      return (
        <p>
          <button onClick={this.logout}>Logout</button>
        </p>
      );
    }
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div className="LoginForm">
        <h1>{loggedIn ? "Welcome Back!" : "Welcome!"}</h1>
        <p>{loggedIn ? "You are logged in." : "Please log in below."}</p>
        {this.state.incorrect ? (
          <p className="Incorrect">Incorrect username or password</p>
        ) : null}
        {this.loginFields()}
      </div>
    );
  }
}
