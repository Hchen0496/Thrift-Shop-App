import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../App.css";
const EMAIL_LENGTH = "";

export default class ForgotPassword extends Component {
        state = {
            email: "",
            confirmed: false,

        };
        emailfield = (event) =>{
          this.setState({email: event.target.value});
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
        
        validateResetForm() {
          return 
            this.state.program.length > 0;
          }
    }
  

    /*check email field is filled with the proper email = 1 function 
    If it`s not filled throw an error 
    otherwise if it`s filled, fetch api
    submit, queries through api, goes through program
 
      



