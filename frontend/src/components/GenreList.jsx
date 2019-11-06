import React from "react";
import Genre from "./Genre";
import axios from "axios";

class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=495d98b77df65d47fbf7eba028518ed7`
      )
      .then(({ data }) => {
        const genres = data.genres;
        this.setState({ genres: genres });
      });
  }

  render() {
    return (
      <div className="genreList">
        {this.state.genres.map(genre => (
          <Genre
            key={genre.id}
            idGenre={genre.id}
            genreName={genre.name}
            genreBackground={genre.background}
          />
        ))}
      </div>
    );
  }
}

export default GenreList;
