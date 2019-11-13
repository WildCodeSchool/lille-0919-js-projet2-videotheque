import React from "react";
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
    axios.get("http://localhost:5000/users").then(arrayOfUsers => {
      const found = arrayOfUsers.data.find(user => {
        return user.username === this.state.username;
      });
      if (found) {
        if (found.password === this.state.password) {
          this.props.handleLogIn(found);
          this.props.toggleModal();
        } else {
          this.props.notification("error", "Wrong password,try again!");
          this.setState({ username: "", password: "" });
        }
      } else {
        this.props.notification("error", "User not found,please sign up!");
        this.setState({ username: "", password: "" });
      }
    });
  };

  render() {
    return (
      <div className="logIn">
        <h1>Log In</h1>             
        <form onSubmit={e => this.handleSubmit(e)}>
          <label className="label">Username</label>
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
          <p className="signUp" onClick={() => this.props.toggleSignUp()}>
            Don't have an account yet? Sign Up!
          </p>
                    
          <button type="submit" className="submitButton">
            Submit!
          </button>
             
        </form>
             
      </div>
    );
  }
}

export default LogInForm;
