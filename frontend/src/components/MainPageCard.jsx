import React from "react";
import { Link } from "react-router-dom";
import "./style/MainPageCard.css";

class MainPageCard extends React.Component {
  render() {
    return (
      <Link
        to={`/movieSheet/${this.props.movieData.id}`}
        className="div-poster"
      >
        <img
          className="single-movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${this.props.movieData.poster_path}`}
          alt={this.props.movieData.poster_path}
          key={this.props.movieData.poster_path}
          id={this.props.movieData.id}
        />
      </Link>
    );
  }
}

export default MainPageCard;
