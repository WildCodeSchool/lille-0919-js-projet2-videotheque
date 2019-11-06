import React from "react";
import "./style/MainPage.css";
import MainPageCard from "./MainPageCard";
import movieList from "../DataBaseMovie";
import TrailerHomePage from "./TrailerHomePage";

function MainPage() {
  return (
    <div className="main-homepage">
      <div className="trailer-homepage">
        <TrailerHomePage />
      </div>
      <div className="main-poster">
        {movieList.map((item, i) => (
          <MainPageCard key={i} picture={item.picture} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
