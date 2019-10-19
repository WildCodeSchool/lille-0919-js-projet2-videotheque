import React from "react";
import "./MainPage.css";
import MainPageCard from "./MainPageCard";

function MainPage() {
  return (
    <div className="main-homepage">
      <div className="trailer-homepage">
        <div className="trailer">HELLO</div>
      </div>
      <div className="main-poster">
        {moviePoster.map(item => (
          <MainPageCard image={item.image} />
        ))}
      </div>
    </div>
  );
}

const moviePoster = [
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  },
  {
    image: "Pictures/shinning.jpeg"
  }
];

export default MainPage;
