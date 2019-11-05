import React from "react";
import MoviePage from "./MoviePage";
import movieList from "../DataBaseMovie";
import { useParams } from "react-router-dom";

function MoviePageFilterByTitle() {
  const { id } = useParams();
  return (
    <div>
      {movieList
        .filter(movie => {
          return movie.title === `${id}`;
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
            trailerThumb={moviePage.trailerThumb}
          />
        ))}
    </div>
  );
}

export default MoviePageFilterByTitle;
