import React, { Component } from "react";
import "./SignInForm.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "Awesome Mail" };
    this.state = { username: "Awesome Username" };
    this.state = { password: "Awesome Password" };
  }

  render() {
    return (
      <div className="SignIn">
        <label htmlFor="title">E-mail</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={event => {
            this.setState({ mail: event.target.value });
          }}
        />
        <label htmlFor="title">Username</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={event => {
            this.setState({ username: event.target.value });
          }}
        />
        <label htmlFor="title">Password</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default SignInForm;
