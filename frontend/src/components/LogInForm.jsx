import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";
  import "./LogInForm.css";

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
      <container className="container">
                
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
              
      </container>
    );
  }
}

export default LogInForm;




render() {
    return (
      <Router className="container">
        <div className="logIn">
          <h1 className="form">Log In</h1>

          <label className="label">Username</label>
          <input
            className="logInInput"
            type="text"
            value={this.state.title}
            onChange={event => {
              this.setState({ username: event.target.value });
            }}
          />
          <label className="label">Password</label>
          <input
            className="logInInput"
            type="text"
            value={this.state.title}
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
            Submit !
          </button>
        </div>
        <Switch>
          <Route path="/signInForm">
            <SignInForm />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default LogInForm;