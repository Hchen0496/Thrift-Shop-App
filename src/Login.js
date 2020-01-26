import React, { Component } from "react";
import "./App.css";

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
            <br />
            <button type="submit">Login</button> <br />
            <a href="#">Forgot Password?</a> <br />
            <a href="#">New User?</a>
          </div>
        </div>
      </div>
    );
  }
}
