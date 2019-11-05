import React from "react";
import Movie from "./Movie";
import movieList from "../DataBaseMovie";
import "./ListMovies.css";
import { useParams } from "react-router-dom";

function ListMovies() {
  const { genreName } = useParams();
  const { id } = useParams();

  return (
    <div className="ListMovies">
      <h1>{genreName}</h1>
      {movieList
        .filter(movie => {
          return movie.genre === `${genreName}`;
        })
        .map(movie => (
          <Movie
            key={movie.title}
            title={movie.title}
            genre={movie.genre}
            duration={movie.duration}
            picture={movie.picture}
            synopsis={movie.synopsis}
            id={movie.title}
          />
        ))}
    </div>
  );
}
export default ListMovies;
