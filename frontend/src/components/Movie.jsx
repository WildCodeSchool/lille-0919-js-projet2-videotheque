import React from "react";
import "./style/Movie.css";

function Movie(props) {
  return (
    <div className="Movie">
      <img
        className="avatar"
        src={`https://image.tmdb.org/t/p/w500/${props.picture}`}
        alt={props.title}
      />
      <div className="infos">
        <h2>{props.title}</h2>
        <p>
          release date: {props.release}
          <br />
          genre: {props.genre}
        </p>
        <div className="synopsis">
          <p>
            synopsis:
            <br />
            {props.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
