import React from "react";
import "./MainPageCard.css";

function MainPageCard(props) {
  return (
    <div>
      <img class="single-movie-poster" src={props.image} alt="Movie Poster" />
    </div>
  );
}

export default MainPageCard;
