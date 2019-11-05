import React from "react";
import "./MainPage.css";
import MainPageCard from "./MainPageCard";
import movieList from "../DataBaseMovie";

function MainPage() {
  return (
    <div className="main-homepage">
      <div className="trailer-homepage">
        <div className="trailer">
          <img
            className="icon-play"
            src="pictures/icon-play.svg"
            alt="Video Player"
          />
        </div>
      </div>
      <div className="main-poster">
        {movieList.map((item, i) => (
          <MainPageCard key={i} picture={item.picture} id={item.title} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
