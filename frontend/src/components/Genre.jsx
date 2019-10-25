import React from "react";
import "./Genre.css";

function Genre(props) {
  return (
    <div className="genre">
      <a href=" ">
        <img
          key={props.genreName}
          alt={props.genreName}
          src={props.genreBackground}
        />
        <h1>{props.genreName}</h1>
      </a>
    </div>
  );
}

export default Genre;
