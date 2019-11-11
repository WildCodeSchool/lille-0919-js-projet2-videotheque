import React from "react";
import { Link } from "react-router-dom";
import "./style/LogInForm.css";
import axios from "axios";

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
    axios.get("http://localhost:5000/users").then(result => {
      const found = result.data.find(user => {
        return user.username === this.state.username;
      });
      if (found) {
        if (found.password === this.state.password) {
          console.log("Yay! Logging you in.");
          this.props.handleLogIn(found);
          this.props.toggleModal();
          // TODO - redirect to /userAccount
        } else {
          console.log("Incorrect password.");
          this.setState({ username: "", password: "" });
        }
      } else {
        console.log("User not found.");
        this.setState({ username: "", password: "" });
      }
    });
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
            type="password"
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
