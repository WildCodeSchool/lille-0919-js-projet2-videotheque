import React from "react";
import { Link } from "react-router-dom";
import "./MainPageCard.css";

function MainPageCard(props) {
  return (
    <Link to={`/movieSheet/${props.id}`} className="div-poster">
      <img
        className="single-movie-poster"
        src={props.picture}
        alt="Movie Poster"
      />
    </Link>
  );
}

export default MainPageCard;
