import React from "react";
import Movie from "./Movie";
import movieList from "../DataBaseMovie";
import "./ListMovies.css";

function ListMovies() {
  return (
    <div className="ListMovies">
      <h1>Genre</h1>
      {movieList
        .filter(movie => {
          return movie.genre === "Horror";
        })
        .map(movie => (
          <a href=" ">
            <Movie
              key={movie.title}
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
