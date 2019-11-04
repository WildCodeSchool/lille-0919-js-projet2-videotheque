import React, { Component } from "react";
import "./SignInForm.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "E-mail",
      username: "Username",
      password: "Password",
      confPassword: "confPassword"
    };
  }

  render() {
    return (
      <container className="container">
                
        <div className="logIn">
                    <h1 className="form">Log In</h1>
                    <label className="label">E-mail</label>
                    
          <input
            className="signInInput"
            type="text"
            value={this.state.mail}
            onChange={event => {
              this.setState({ mail: event.target.value });
            }}
          />
                    <label className="label">Username</label>
                    
          <input
            className="signInInput"
            type="text"
            value={this.state.username}
            onChange={event => {
              this.setState({ username: event.target.value });
            }}
          />
                    <label className="label">Password</label>
                    
          <input
            className="signInInput"
            type="text"
            value={this.state.password}
            onChange={event => {
              this.setState({ password: event.target.value });
            }}
          />
                    <label className="label">Confirm password</label>
                    
          <input
            className="signInInput"
            type="text"
            value={this.state.confPassword}
            onChange={event => {
              this.setState({ confPassword: event.target.value });
            }}
          />
                    
          <button type="submit" className="submitButton">
                        Submit !           
          </button>
                  
        </div>
              
      </container>
    );
  }
}

export default SignInForm;
