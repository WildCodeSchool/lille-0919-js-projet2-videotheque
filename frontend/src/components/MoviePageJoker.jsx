import React from "react";
import MoviePage from "./MoviePage";
import movieList from "../DataBaseMovie";

const MoviePageJoker = () => (
  <div>
    {movieList
      .filter(toto => {
        return toto.title === "Joker";
      })
      .map(moviePage => (
        <MoviePage
          key={moviePage.title}
          title={moviePage.title}
          releasedDate={moviePage.releasedDate}
          with={moviePage.with}
          by={moviePage.by}
          genre={moviePage.genre}
          duration={moviePage.duration}
          picture={moviePage.picture}
          synopsis={moviePage.synopsis}
        />
      ))}
  </div>
);

export default MoviePageJoker;
