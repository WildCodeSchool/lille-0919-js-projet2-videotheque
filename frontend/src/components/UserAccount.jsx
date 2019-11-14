import React from "react";
import { Link } from "react-router-dom";
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
      this.props.notification("info", "Movie deleted from list");
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
        <div id="myMoviesLibrary">
          <h1>My Library </h1>
          <hr></hr>
        </div>
        <div id="movieIconsPlusTitre">
          <img id="moviePlusIcons" src="./pictures/plusIcon.png" alt="add" />

          <h2>To watch</h2>
        </div>
        <figure>
          <ul>
            {this.state.toWatchMovies.map(movie => {
              return (
                <div>
                  <button
                    className="deletebutton"
                    onClick={() => this.deleteMovie(movie.id, "toWatch")}
                  >
                    x
                  </button>
                  <Link to={`/movieSheet/${movie.id}`} className="div-poster">
                    <li>
                      <img
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.poster_path}
                        key={movie.poster_path}
                        id={movie.id}
                      />
                    </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </figure>
        <div id="movieIconsFavTitre">
          <img id="movieFavIcons" src="./pictures/likeIcon.png" alt="like" />
          <h2>Favorites</h2>
        </div>

        <ul>
          {this.state.favoriteMovies.map(movie => {
            return (
              <div>
                <button
                  className="deletebutton"
                  onClick={() => this.deleteMovie(movie.id, "favorite")}
                >
                  x
                </button>
                <Link to={`/movieSheet/${movie.id}`} className="div-poster">
                  <li>
                    <img
                      className="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.poster_path}
                      key={movie.poster_path}
                      id={movie.id}
                    />
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
        <div id="movieIconsDislikeTitre">
          <img
            id="movieDislikeIcons"
            src="./pictures/dislikeIcon.png"
            alt="Dislike"
          />
          <h2>Dislike</h2>
        </div>
        <ul>
          {this.state.dislikeMovies.map(movie => {
            return (
              <div>
                <button
                  onClick={() => this.deleteMovie(movie.id, "dislike")}
                  className="deletebutton"
                >
                  x
                </button>
                <Link to={`/movieSheet/${movie.id}`} className="div-poster">
                  <li>
                    <img
                      className="movie-poster"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.poster_path}
                      key={movie.poster_path}
                      id={movie.id}
                    />
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default UserAccount;
