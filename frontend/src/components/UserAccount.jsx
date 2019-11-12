import React from "react";
import "./style/UserAccount.css";
import axios from "axios";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toWatchMovies: [],
      favoriteMovies: [],
      dislikeMovies: []
    };
  }

  deleteMovie = (movieId, type) => {
    let typeCategory = "";
    let oldArray = [];
    let stateList = [];
    switch (type) {
      case "toWatch":
        typeCategory = "toWatchMovies";
        oldArray = this.props.user.toWatchMovies;
        stateList = this.state.toWatchMovies;
        break;
      case "favorite":
        typeCategory = "favoriteMovies";
        oldArray = this.props.user.favoriteMovies;
        stateList = this.state.favoriteMovies;
        break;
      case "dislike":
        typeCategory = "dislikeMovies";
        oldArray = this.props.user.dislikeMovies;
        stateList = this.state.dislikeMovies;
        break;
      default:
        break;
    }

    const newArray = oldArray.filter(id => {
      return id !== movieId.toString();
    });

    const newStateList = stateList.filter(movie => {
      return movie.id !== movieId;
    });

    axios({
      method: "patch",
      url: `http://localhost:5000/users/${this.props.user.id}`,
      headers: { "content-type": "application/json; charset=utf-8" },
      data: {
        [typeCategory]: newArray
      }
    }).then(({ data }) => {
      this.props.updateUser(data);
      this.setState({ [typeCategory]: newStateList });
      console.log(``);
    });
  };

  componentDidMount() {
    if (this.props.isLoggedIn) {
      const toWatchIds = this.props.user.toWatchMovies;
      const favoriteIds = this.props.user.favoriteMovies;
      const dislikeIds = this.props.user.dislikeMovies;

      toWatchIds.forEach(id => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=495d98b77df65d47fbf7eba028518ed7`
          )
          .then(({ data }) => {
            this.setState({
              toWatchMovies: [...this.state.toWatchMovies, data]
            });
          });
      });
      favoriteIds.forEach(id => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=495d98b77df65d47fbf7eba028518ed7`
          )
          .then(({ data }) => {
            this.setState({
              favoriteMovies: [...this.state.favoriteMovies, data]
            });
          });
      });
      dislikeIds.forEach(id => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=495d98b77df65d47fbf7eba028518ed7`
          )
          .then(({ data }) => {
            this.setState({
              dislikeMovies: [...this.state.dislikeMovies, data]
            });
          });
      });
    }
  }

  render() {
    return (
      <div id="account-wrapper">
        <div id="movieIconsPlusTitre">
          <h2>To watch</h2>
          <img id="moviePlusIcons" src="./pictures/plusIcon.png" alt="add" />
        </div>

        <ul>
          {this.state.toWatchMovies.map(movie => {
            return (
              <li>
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.poster_path}
                  key={movie.poster_path}
                  id={movie.id}
                />
                <button onClick={() => this.deleteMovie(movie.id, "toWatch")}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <h2>Favorites</h2>
        <ul>
          {this.state.favoriteMovies.map(movie => {
            return (
              <li>
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.poster_path}
                  key={movie.poster_path}
                  id={movie.id}
                />
                <button onClick={() => this.deleteMovie(movie.id, "favorite")}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <h2>Dislike</h2>
        <ul>
          {this.state.dislikeMovies.map(movie => {
            return (
              <li>
                <img
                  className="movie-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.poster_path}
                  key={movie.poster_path}
                  id={movie.id}
                />
                <button onClick={() => this.deleteMovie(movie.id, "dislike")}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default UserAccount;
