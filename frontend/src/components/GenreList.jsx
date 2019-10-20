import React from "react";
import Genre from "./Genre";

const GenresList = [
  {
    name: "Action",
    background:
      "http://fr.web.img6.acsta.net/r_640_360/newsv7/17/09/20/10/53/5922358.jpg"
  },
  {
    name: "Animation",
    background:
      "http://fr.web.img6.acsta.net/r_640_360/newsv7/17/09/20/10/53/5922358.jpg"
  },
  {
    name: "classics",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Comedy",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Documentary",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Drama",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Horror",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Kids & Family",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Mystery",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Romance",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Sci-fi & Fantasy",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Horror",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  }
];

const GenreList = () => (
  <div>
    {GenresList.map(genre => (
      <Genre genreName={genre.name} genreBackground={genre.background} />
    ))}
  </div>
);

export default GenreList;
