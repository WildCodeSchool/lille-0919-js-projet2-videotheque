import React from "react";
import { Link } from "react-router-dom";
import "./style/LogInForm.css";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="logIn">
        <h1 className="form">Log In</h1> 
        <label className="label">Username</label>
                   
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="logInInput"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={event => {
              this.setState({ username: event.target.value });
            }}
          />
          <label className="label">Password</label>
                    
          <input
            className="logInInput"
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={event => {
              this.setState({ password: event.target.value });
            }}
          />
          <p className="signUp">
            <Link to="/signInForm">Don't have an account yet? Sign Up!</Link>>
          </p>{" "}
                    
          <button type="submit" className="submitButton">
            Submit!
          </button>
             
        </form>
             
      </div>
    );
  }
}

export default LogInForm;
