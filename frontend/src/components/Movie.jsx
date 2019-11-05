import React from "react";
import { Link } from "react-router-dom";
import "./style/Movie.css";

function Movie(props) {
  return (
    <div className="Movie">
      <Link to={`/movieSheet/${props.id}`}>
        <img className="avatar" src={props.picture} alt={props.title} />
        <div className="infos">
          <h2>{props.title}</h2>
          <p>
            duration: {props.duration}
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
      </Link>
    </div>
  );
}

export default Movie;
