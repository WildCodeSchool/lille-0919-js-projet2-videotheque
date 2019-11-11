import React from "react";
import "./style/UserAccount.css";
import axios from "axios";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchedMovies: [] };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      const movieIds = this.props.user.favoriteMovies;

      movieIds.forEach(id => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=495d98b77df65d47fbf7eba028518ed7`
          )
          .then(({ data }) => {
            this.setState({
              fetchedMovies: [...this.state.fetchedMovies, data]
            });
          });
      });
    }
  }

  render() {
    console.log("UserAccount state: ", this.state);

    return (
      <div id="account-wrapper">
        <h1>MY LIBRARY</h1>
        <ul></ul>
      </div>
    );
  }
}
export default UserAccount;
