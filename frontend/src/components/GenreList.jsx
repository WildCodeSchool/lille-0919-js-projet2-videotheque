import React from "react";
import Genre from "./Genre";
import axios from "axios";

class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      movies: []
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    let genres = [];
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=495d98b77df65d47fbf7eba028518ed7`
      )
      .then(({ data }) => {
        genres = data.genres;
      })
      .then(() => {
        genres.map(genre => {
          return axios
            .get(
              `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=495d98b77df65d47fbf7eba028518ed7`
            )
            .then(({ data }) => {
              genre.img = data.results[4].backdrop_path;
            });
        });
        this.setState({ genres: genres });
      });
  }

  render() {
    return (
      <div className="genreList">
        {this.state.genres
          .filter(genre => {
            const name = genre.name.toLowerCase();
            return name.includes(`${this.props.input.toLowerCase()}`);
          })
          .map(genre => (
            <Genre
              key={genre.id}
              idGenre={genre.id}
              genreName={genre.name}
              genreBackground={genre.img}
            />
          ))}
      </div>
    );
  }
}

export default GenreList;
