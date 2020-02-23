import React, {Component} from "react";
import "../App.css";
import {Link} from 'react-router-dom';

class SignUpPage extends Component {
  state = {
    error: false,
    errorMessage: "",
    success: false,
    firstName: "",
    lastName: "",
    email: "",
    firstPassword: "",
    secondPassword: ""
  };

  fieldChanged = name => {
    return event => {
      let { value } = event.target;
      this.setState({ [name]: value });
    };
  };

  verifyUserCreds = () => {
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.firstPassword === "" ||
      this.state.secondPassword === ""
    ) {
      this.setState({
        error: true,
        errorMessage: "Field is required"
      });
      return false;
    }
  };
  //Function to allow user to sign up and account will be made.
  /*signUpUser = (event) => {
        if(this.verifyUserCreds()) {

        }
    }*/
    render() {
        if(this.state.success) return true;
        let errorMessage = '';
        if (this.state.error) {
            errorMessage = (
                <div className="alert alert-danger">
                    {this.state.errorMessage}
                </div>
            );
        }
        return (
            <div className="bg-sign-up"> {/*Implement first background image*/}
                <div className="form-inline">    
                    <div className="row">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                onChange={this.fieldChanged('firstName')}
                            />
                             <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={this.fieldChanged('lastName')}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                onChange={this.fieldChanged('email')}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="password"
                                onChange={this.fieldChanged('firstPassword')} 
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Re-enter password"
                                onChange={this.fieldChanged('secondPassword')}
                            />
                        </div>
                        <div className="col-12">
                        <button type="button" className="btn btn-primary">Submit</button>
                        <p>
                          <Link to="/">Already have an account?</Link> <br/>
                        </p> 
                        </div>     
                    </div>
                </div>
            </div>         
        );
      } 
}

export default SignUpPage;
