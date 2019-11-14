import React from "react";
import axios from "axios";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      avatar: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      avatar: this.state.avatar,
      toWatchMovies: [],
      favoriteMovies: [],
      dislikeMovies: []
    };

    axios({
      method: "post",
      url: `http://localhost:5000/users`,
      headers: { "content-type": "application/json; charset=utf-8" },
      data: newUser
    }).then(receipt => {
      this.props.handleLogIn(receipt.data);
      this.props.toggleModal();
      this.props.notification("success", "You have signed up, welcome!");
    });
  };

  render() {
    return (
      <div className="logIn">
        <h1 className="form">Sign up</h1> 
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
          <input
            className="logInInput"
            type="password"
            placeholder="Confirm your password"
            value={this.state.password}
            onChange={event => {
              this.setState({ password: event.target.value });
            }}
          />
          <p className="signUp" onClick={() => this.props.toggleSignUp()}>
            Already have an account? Sign in!
          </p>
                    
          <button type="submit" className="submitButton">
            Submit!
          </button>
             
        </form>
             
      </div>
    );
  }
}

export default SignUpForm;
