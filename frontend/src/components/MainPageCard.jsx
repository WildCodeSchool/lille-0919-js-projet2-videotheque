import React from "react";
import { Link } from "react-router-dom";
import "./style/MainPageCard.css";

function MainPageCard({ movieData }) {
  return (
    <Link to={`/movieSheet/${props.id}`} className="div-poster">
      <img
        className="single-movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        alt={movieData.poster_path}
        key={movieData.poster_path}
      />
    </Link>
  );
}

export default MainPageCard;
