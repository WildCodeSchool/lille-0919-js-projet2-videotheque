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
            src="Pictures/icon-play.svg"
            alt="Video Player"
          />
        </div>
      </div>
      <div className="main-poster">
        {movieList.map(item => (
          <MainPageCard picture={item.picture} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;