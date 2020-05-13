import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

const PASSWORD_LENGTH = 8;

export default class SignUpPage extends Component {
  
  state = {
    email: '',
    firstName: '',
    lastName: '',
    mainPassword: '',
    verifyPassword: '',
    error: false,
    errorMessage: '' 
  };

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]:value });
    }
  }

  validCredentials = () => {
    //checking fields aren't filled
    if(this.state.email === '' || 
        this.state.firstName === '' ||
        this.state.lastName === '' ||
        this.state.mainPassword === '' ||
        this.state.verifyPassword === '') {
          this.setState({
            error: true,
            errorMessage: "Fields aren't completed. Must complete all fields."
          });
          return false;
        }
    //check both passwords match  
    if(this.state.mainPassword !== this.state.verifyPassword) {
      this.setState({
        error:true,
        errorMessage: "Passwords doesn't match."
      });
      return false;
    }
    //checking password length is too short   
    if (this.state.mainPassword < PASSWORD_LENGTH) {
      this.setState({
        error:true,
        errorMessage: "Password length is too short."
      });
      return false;
    }
    return true;
  }
  
  //continue on fetching api
  signUpUser = (event) => {

  }

  //function to check all fields aren't filled in
  render() {
    return (
      <div className="bg-login">
        <div className="box-for-signup">
          <div className="input-style">
            <input
              type="firstname"
              class="firstname-signup"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.fieldChanged('firstName')} 
              required
            />
            <br />
            <input
              type="lastname"
              class="lastname-signup"
              placeholder="Last Name"
              value = {this.fieldChanged('lastName')}
              required
            />
            <br />
            <input 
              type="email" 
              class="email-signup" 
              placeholder="Email"
              value={this.state.email}
              onChange={this.fieldChanged('email')} 
              required 
            />
            <br />
            <input
              type="password"
              class="password-signup"
              placeholder="Password"
              value={this.state.mainPassword}
              onChange={this.fieldChanged('mainPassword')}
              required
            />
            <br/>
            <input
              type="password"
              class="password-check"
              placeholder="Re-enter Password"
              value={this.state.verifyPassword}
              onChange={this.fieldChanged('verifyPassword')}
              required
            />
            <br />
            <button type="submit" class="button-sign-up">Login</button>
            <p>
              <Link to="#">Forgot Password?</Link> <br />
              Already a user? <Link to="/">Sign in</Link> <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

