import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Login extends Component {
  state = {
    emails: [],
    password: [],
    error: null
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://Localhost:8080/email")
      .then(response => response.json())
      .then(data => this.setState({ emails: data, password: data }));
  }

  Errormsg(event) {
    alert("404, cannot Load the site.");
    alert("Please try again later");
    event.preventDefault();
  }

  render() {
    const { emails, password } = this.state;
    return (
      <div className="bg-login">
        <div className="box-for-login">
          <div className="input-style">
            <h1>
              Welcome To <b>Frugal Fashion!</b>
            </h1>
            <input
              type="email"
              class="email"
              placeholder="Email"
              required
              onChange={this.state.emails}
            />
            <br />
            <input
              type="password"
              class="passwords"
              placeholder="Password"
              required
              onChange={this.state.password}
            />
            <br />
            <button type="submit">Login</button>
            <p>
              <Link to="#">Forgot Password?</Link> <br />
              New User? <Link to="/SignUpPage">Create an Account!</Link> <br />
              or continue as <Link type="#">guest!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
