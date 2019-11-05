import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "./style/LogInForm.css";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Username",
      password: "Password"
    };
  }

  render() {
    return (
      <div className="logIn">
        <h1 className="form">Log In</h1>
             <label className="label">Username</label>
                  
        <input
          className="logInInput"
          type="text"
          value={this.state.username}
          onChange={event => {
            this.setState({ username: event.target.value });
          }}
        />
             <label className="label">Password</label>
                  
        <input
          className="logInInput"
          type="text"
          value={this.state.password}
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <p className="signUp">
          <NavLink to="/signInForm">
            Don't have an account yet? Sign Up!
          </NavLink>
          >
        </p>
                  
        <button type="submit" className="submitButton">
                      Submit !           
        </button>
                
      </div>
    );
  }
}

export default LogInForm;
