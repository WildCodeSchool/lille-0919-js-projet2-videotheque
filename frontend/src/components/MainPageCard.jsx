import React from "react";
import { Link } from "react-router-dom";
import "./style/MainPageCard.css";

function MainPageCard(props) {
  return (
    <Link to="/movieSheet" className="div-poster">
      <img
        className="single-movie-poster"
        src={props.picture}
        alt="Movie Poster"
      />
    </Link>
  );
}

export default MainPageCard;
