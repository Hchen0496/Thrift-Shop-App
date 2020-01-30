import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  render() {
    return (
      <div className="bg-login">
        <div className="box-for-login">
          <div className="input-style">
            <input type="email" class="email" placeholder="Email" required />
            <br />
            <input
              type="password"
              class="passwords"
              placeholder="Password"
              required
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
