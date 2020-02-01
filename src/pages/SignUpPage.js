import React from "react";
import "../App.css";
const PASSWORD_LENGTH = 8;
class SignUpPage extends React.Component {
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

    if (this.state.firstPassword.length < PASSWORD_LENGTH) {
      this.setState({
        error: true,
        errorMessage: "Password is short. Must be at least 8 characters"
      });
      return false;
    }
    return true;
  };
  //Function to allow user to sign up and account will be made.
  /*signUpUser = (event) => {
        if(this.verifyUserCreds()) {

        }
    }*/
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec9f5749089b7c6d0bca0874fd276154530cc9ee
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
                        <div className="sign-up-header">
                            Registration
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                onChange={this.fieldChanged('firstName')}
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={this.fieldChanged('lastName')}
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                onChange={this.fieldChanged('email')}
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="password"
                                onChange={this.fieldChanged('firstPassword')} 
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Re-enter password"
                                onChange={this.fieldChanged('secondPassword')}
                            />
                        </div>
                        <div className="col-lg-12">
                        <button type="button" className="btn btn-primary">Submit</button>
                        </div>         
                    </div>
                </div>
            </div>         
        ); 
<<<<<<< HEAD
=======
  render() {
    if (this.state.success) return true;
    let errorMessage = "";
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">{this.state.errorMessage}</div>
      );
>>>>>>> master
    }
    return (
      <div className="bg-sign-up">
        {" "}
        {/*Implement first background image*/}
        <div className="form-inline">
          <div className="row">
            <div className="sign-up-header">Registration</div>
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={this.fieldChanged("firstName")}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={this.fieldChanged("lastName")}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={this.fieldChanged("email")}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="password"
                onChange={this.fieldChanged("firstPassword")}
              />
            </div>
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="Re-enter password"
                onChange={this.fieldChanged("secondPassword")}
              />
            </div>
            <div className="col-lg-12">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
=======
>>>>>>> ec9f5749089b7c6d0bca0874fd276154530cc9ee
  }
}

export default SignUpPage;
