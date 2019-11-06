import React from "react";
import Movie from "./Movie";
import axios from "axios";
import "./style/ListMovies.css";
//import { useParams } from "react-router-dom";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    for (let i = 1; i <= 20; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=495d98b77df65d47fbf7eba028518ed7&language=en-US&page=${i}`
        )
        .then(({ data }) => {
          const { results } = data;
          let tmpMovies = this.state.movies;
          tmpMovies.push(...results);
          this.setState({
            movies: tmpMovies
          });
        });
    }
  }

  render() {
    return (
      <div className="ListMovies">
        <h1>All Movies</h1>
        {this.state.movies /*
          .filter(movie => {
            return movie.genre === `${this.state.genreName}`;
          })*/
          .map(movie => (
            <a href=" ">
              <Movie
                key={movie.title}
                title={movie.title}
                genre={movie.genre}
                duration={movie.duration}
                picture={movie.picture}
                synopsis={movie.synopsis}
              />
            </a>
          ))}
      </div>
    );
  }
}
export default ListMovies;
