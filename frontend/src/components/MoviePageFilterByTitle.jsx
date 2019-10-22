import React from "react";
import MoviePage from "./MoviePage";
import movieList from "../DataBaseMovie";

const MoviePageFilterByTitle = () => (
  <div>
    {movieList
      .filter(movie => {
        return movie.title === "Joker";
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
          trailer={moviePage.trailer}
        />
      ))}
  </div>
);

export default MoviePageFilterByTitle;
