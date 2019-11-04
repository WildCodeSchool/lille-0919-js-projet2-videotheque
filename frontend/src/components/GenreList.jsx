import React from "react";
import Genre from "./Genre";
import DataGenresList from "../DataGenre";

function GenreList() {
  return (
    <div>
      {DataGenresList.map((genre, i) => (
        <Genre
          key={i}
          genreName={genre.name}
          genreBackground={genre.background}
        />
      ))}
    </div>
  );
}

export default GenreList;
