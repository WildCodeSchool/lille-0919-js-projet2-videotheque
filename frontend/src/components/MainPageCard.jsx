import React from "react";
import "./MainPageCard.css";

function MainPageCard(props) {
  return (
    <a className="div-poster">
      <img
        className="single-movie-poster"
        src={props.picture}
        alt="Movie Poster"
      />
    </a>
  );
}

export default MainPageCard;
