import React from "react";
import "./style/Genre.css";
import { Link } from "react-router-dom";

function Genre(props) {
  return (
    <div className="genre">
      <Link to={`/listMoviesByGenre/${props.genreName}`}>
        <img
          key={props.genreName}
          alt={props.genreName}
          src={props.genreBackground}
        />
        <h1>{props.genreName}</h1>
      </Link>
    </div>
  );
}

export default Genre;
