import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import "../App.css";
let errorMessage = '';

export default class ForgotPassword extends Component {
        state = {
            email: '',
            confirmed: false,

        };
        emailfield = (email) =>{
          return(event) =>{
          let { value } = event.target;
          this.setState({[email]: value});
        }
      }

        onError=() =>{
          this.setState({
            confirmed:false,
          });
          return false;
        }
        Validation=() =>  {  
           if(this.state.email === ""){
             this.onError();
             alert("emailfield is empty");
             return false;
           }
           return true;
           
           }
          
          
           render(){
              return(
          <div className="bg-login">
          <div className="box-for-forgotpassword">
          <div className="input-style">
          <input
            type="email"
            className="email-signup"
            placeholder="email"
            value={this.state.email}
            onChange={this.emailfield('email')}
            required
            />
            <br/>
            <button type="submit" className="button-sign-up" onClick={this.Validation}>Retrieve Password</button>
            <p>
            <Link to="#">SignUp?</Link> <br />
              Already a user? <Link to="/">Sign in</Link> <br />
            </p>
          </div>
          </div>
          </div>
        );
  }
}
  

    /*check email field is filled with the proper email = 1 function 
    If it`s not filled throw an error 
    otherwise if it`s filled, fetch api
    submit, queries through api, goes through program
 
      



=======
import React from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import "../App.css";
import {HelpBlock,FormGroup,Glyphicon,FormControl} from "react-bootstrap";

const PASSWORD_LENGTH = 8;

class ForgotPasswordPage extends React.Component {
  
      state = {
        email: "",
        newPassword: "",
        confirmed: false,
        confirmPassword: "",
      };
    
      
    // create an element (alert) trigger function to send error to user 
    validateEmail() {
      return this.state.email.length > 0;
    }
  
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
    
     /* handleSendProgramClick = async event => {
        event.preventDefault();
    
        this.setState({ isSendingProgram: true });
    
        try {
          await Auth.forgotPassword(this.state.email);
          this.setState({ codeSent: true });
        } catch (e) {
          alert(e.message);
          this.setState({ isSendingProgram: false });
        }
      };

      
  handleConfirmClick = async event => {
    event.preventDefault();

    this.setState({ isConfirming: true });

    try {
      await Auth.forgotPasswordSubmit(
        this.state.email,
        this.state.program,
        this.state.password
      );
      this.setState({ confirmed: true });
    } catch (e) {
      alert(e.message);
      this.setState({ isConfirming: false });
    }
  }; */
 
