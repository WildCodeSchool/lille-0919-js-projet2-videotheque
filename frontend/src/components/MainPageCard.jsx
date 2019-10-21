import React from "react";
import "./MainPageCard.css";

function MainPageCard(props) {
  return (
    <div className="div-poster">
      <img
        className="single-movie-poster"
        src={props.picture}
        alt="Movie Poster"
      />
    </div>
  );
}

export default MainPageCard;
