import React from "react";
import Movie from "./Movie";
import axios from "axios";
import "./style/ListMovies.css";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genreName: [],
      genreId: 27
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
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=495d98b77df65d47fbf7eba028518ed7`
      )
      .then(({ data }) => {
        console.log(this.props.match.params.genreName);
        let myGenre = data.genres.filter(genre => {
          return genre.name === this.props.match.params.genreName;
        });
        let myGenreName = myGenre[0].name;
        this.setState({ genreName: myGenreName });
        myGenre = myGenre[0].id;
        this.setState({
          genreId: myGenre
        });
      });
  }

  render() {
    return (
      <div className="ListMovies">
        <h1>{this.state.genreName} Movies</h1>
        {this.state.movies
          .filter(movie => {
            return movie.genre_ids.includes(this.state.genreId);
          })
          .map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genre={movie.genre_ids}
              release={movie.release_date}
              picture={movie.poster_path}
              synopsis={movie.overview}
            />
          ))}
      </div>
    );
  }
}
export default ListMovies;
