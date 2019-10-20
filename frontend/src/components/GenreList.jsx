import React from "react";
import Genre from "./Genre";

const GenresList = [
  {
    name: "Action",
    background:
      "https://www.lemagducine.fr/wp-content/uploads/2019/10/will-smith-ang-lee-gemini-man-1155x720.jpg"
  },
  {
    name: "Animation",
    background:
      "http://fr.web.img6.acsta.net/r_640_360/newsv7/17/09/20/10/53/5922358.jpg"
  },
  {
    name: "Comedy",
    background:
      "http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/Very-Bad-Trip-3-les-trois-acteurs-rempilent-pour-45-millions-de-dollars.jpg"
  },
  {
    name: "Drama",
    background: "https://thumb.canalplus.pro/bddpe/unsafe/1280x720/52841507"
  },
  {
    name: "Horror",
    background:
      "http://fr.web.img5.acsta.net/r_640_360/newsv7/18/01/27/13/27/3768109.jpg"
  },
  {
    name: "Kids & Family",
    background:
      "http://www.pieuvre.ca/wp-content/uploads/2019/08/DetecivePikachu_poster.jpg"
  },
  {
    name: "Romance",
    background:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=555x10000:format=jpg/path/s63ccf77ce0e97436/image/i8528a6160814ca02/version/1550906294/image.jpg"
  },
  {
    name: "Sci-fi & Fantasy",
    background: "https://www.syfy.com/sites/syfy/files/wire/legacy/x-wing.0.jpg"
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
