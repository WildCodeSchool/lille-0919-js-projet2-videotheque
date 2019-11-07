import React from "react";
import "./style/MainPage.css";
import MainPageCard from "./MainPageCard";
import axios from "axios";

class MainPage extends React.Component {
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
    for (let i = 1; i <= 2; i++) {
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
      <div className="main-homepage">
        <div className="main-poster">
          {this.state.movies.map(movie => {
            return <MainPageCard movieData={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default MainPage;
