import React from "react";
import MoviePage from "./MoviePage";
import movieList from "../DataBaseMovie";

function MoviePageFilterByTitle() {
  return (
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
            by={moviePage.by}
            genre={moviePage.genre}
            duration={moviePage.duration}
            picture={moviePage.picture}
            synopsis={moviePage.synopsis}
            trailer={moviePage.trailer}
            trailerThumb={moviePage.trailerThumb}
          />
        ))}
    </div>
  );
}

export default MoviePageFilterByTitle;
