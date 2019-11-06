import React from "react";
import "./style/Movie.css";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <Link to={`/movieSheet/${props.id}`}>
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
    </Link>
  );
}

export default Movie;
