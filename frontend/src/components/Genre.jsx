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
          src={props.genreBackground}
        />
        <h1>{props.genreName}</h1>
      </div>
    </Link>
  );
}

export default Genre;
