import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  //1rely on email and password to display login
  //maki

  render() {
    return (
      <div className="bg-login">
        <div className="box-for-login">
          <div className="input-style">
            <input type="email" className="email" placeholder="Email" required />
            <br />
            <input
              type="password"
              className="passwords"
              placeholder="Password"
              required
            />
            <br />
            <button type="submit">Login</button> 
            <p> HEAD
              <Link to="/ForgotPasswordPage">Forgot Password?</Link> <br />
              New User? <Link to="/SignUpPage">Create an Account!</Link> <br />
              <Link to="/ProfilePage">Profile</Link><br/>

              <Link to="/ForgotPasswordPage">Forgot Password?</Link> <br />
              New User? 

              or continue as <Link type="#">guest!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
