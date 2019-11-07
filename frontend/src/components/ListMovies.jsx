import React from "react";
import Movie from "./Movie";
import axios from "axios";
import "./style/ListMovies.css";
//import { useParams } from "react-router-dom";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genreName: []
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
        const results = data.genres;
        let genre = this.state.genreName;
        genre.push(...results);
        this.setState({
          genreName: genre
        });
        console.log(this.state.genreName[10].name);
        console.log(this.state.genreName[10].id);
      });
  }

  render() {
    return (
      <div className="ListMovies">
        <h1>Horror Movies</h1>
        {this.state.movies
          .filter(movie => {
            return movie.genre_ids.includes(27);
          })
          .map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
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
