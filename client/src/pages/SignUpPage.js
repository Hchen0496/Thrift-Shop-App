import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

const PASSWORD_LENGTH = 8;

let errorMessage = '';

export default class SignUpPage extends Component {
  
  state = {
    email: '',
    firstName: '',
    lastName: '',
    success: false,
    mainPassword: '',
    verifyPassword: '',
    error: false,   
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
  signUpUser = () => {
    if(this.validCredentials()) {
      console.log("valid crentials")
      fetch("api/thrift/consumer/", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.mainPassword,
        }),
      })
        .then(res => {
          if(res.ok) {
            console.log("res is ok");
            this.setState({
              success:true
            });
            return res.json();
          }
        })
        .catch(err => {
          this.setState({
            error: true,
            errorMessage: 'There was an error signing you up'
          });
        });
    }
  }

  //function to check all fields aren't filled in
  render() {
    if(this.state.success) {
      console.log("Redirecting to LoginPage");
      return <Redirect to="/" />;
    }

    if(this.state.error) {
      console.log("printing errorMessage");
      errorMessage = (
        <div className="alert-danger" role="alert">
            {this.state.errorMessage}
        </div>
      );
    }
    return (
      <div className="bg-login">
        <div className="box-for-signup">
          <div className="input-style">
            <input
              type="firstname"
              className="firstname-signup"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.fieldChanged('firstName')} 
              required
            />
            <br />
            <input
              type="lastname"
              className="lastname-signup"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.fieldChanged('lastName')}
              required
            />
            <br />
            <input 
              type="email" 
              className="email-signup" 
              placeholder="Email"
              value={this.state.email}
              onChange={this.fieldChanged('email')} 
              required 
            />          
            <br />
            <input
              type="password"
              className="password-signup"
              placeholder="Password"
              value={this.state.mainPassword}
              onChange={this.fieldChanged('mainPassword')}
              required
            />
            <br/>
            <input
              type="password"
              className="password-check"
              placeholder="Re-enter Password"
              value={this.state.verifyPassword}
              onChange={this.fieldChanged('verifyPassword')}
              required
            />
            <br />
            <button type="submit" className="button-sign-up" onClick={this.signUpUser}>Create Account</button>
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

