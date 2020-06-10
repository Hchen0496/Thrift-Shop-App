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
  renderRequestProgramForm() {
    return (
      <div className="bg-forgot-password">
            
                    
                        <div className="sign-up-header">
                          Forgot Password
                          </div>
          
      <form onSubmit={this.handleSendProgramClick}>
        <FormGroup bsSize="large" controlId="email">
          <ControlLabel color="yellow">Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <section>
        <button type="button" className="btn btn-primary">Send</button>
        </section>
        </form>
        
        </div>
        );
    }

    //this body should be made on another page (S.N: don't need function with it)
    renderConfirmationForm() {
        return (
          <form onSubmit={this.handleConfirmClick}>
            <FormGroup bsSize="large" controlId="code">
              <ControlLabel>Confirmation Program</ControlLabel>
              <FormControl
                autoFocus
                type="tel"
                value={this.state.program}
                onChange={this.handleChange}
              />
              <HelpBlock>
                Please check your email ({this.state.email}) for the confirmation
                program.
              </HelpBlock>
            </FormGroup>
            <hr />
            <FormGroup bsSize="large" controlId="password">
              <ControlLabel>New Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup bsSize="large" controlId="confirmPassword">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                type="password"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
            </FormGroup>
            </form>
    );
  }

  //this body can be created in another page(page organization)
  renderSuccessMessage() {
    return (
      <div className="success">
        <Glyphicon glyph="ok" />
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  render() {
    return (
      //div tag for background image
        //set up the form for user to enter their email
      <div className="">
        {!this.state.programSent
          ? this.renderRequestProgramForm()
          : !this.state.confirmed
            ? this.renderConfirmationForm()
            : this.renderSuccessMessage()}
      </div>
    );
  }



}

export default ForgotPasswordPage;