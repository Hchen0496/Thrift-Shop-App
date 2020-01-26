import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Login extends Component {
  render() {
    return (
      <div className="bg-login">
        <div className="box-for-login">
          <div className="input-style">
            <input type="email" name="e-mail" placeholder="Email" required />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Link to="#">Forgot Password?</Link>
            <button type="submit">Login</button>
            <p>
              New User? <Link to="/SignUpPage">Create an Account!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
