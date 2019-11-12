import React from "react";
import Movie from "./Movie";
import movieList from "../DataBaseMovie";
import "./style/ListMovies.css";
import { useParams } from "react-router-dom";

function ListMovies() {
  const { genreName } = useParams();
  return (
    <div className="ListMovies">
      <h1>{genreName}</h1>
      {movieList
        .filter(movie => {
          return movie.genre === `${genreName}`;
        })
        .map(movie => (
          <a href=" ">
            <Movie
              key={movie.id}
              title={movie.title}
              genre={movie.genre}
              duration={movie.duration}
              picture={movie.picture}
              synopsis={movie.synopsis}
            />
          </a>
        ))}
    </div>
  );
}
export default ListMovies;
