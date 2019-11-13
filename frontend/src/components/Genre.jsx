import React from "react";
import "./style/Genre.css";
import { Link } from "react-router-dom";

function Genre(props) {
  return (
    <Link to={`/listMovies/${props.genreName}`}>
      <div className="genre">
        <img
          key={props.genreName}
          alt={props.genreName}
          src={`https://image.tmdb.org/t/p/w500${props.genreBackground}`}
        />
        <div className="h1">
          <h1>{props.genreName}</h1>
        </div>
      </div>
    </Link>
  );
}

export default Genre;
