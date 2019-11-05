import React from "react";
import MovieByGenre from "./MovieByGenre";
import movieList from "../DataBaseMovie";
import "./style/ListMoviesByGenre.css";
import { useParams } from "react-router-dom";

function ListMoviesByGenre() {
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
            <MovieByGenre
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
export default ListMoviesByGenre;
