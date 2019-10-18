import React from "react";
import "./MainPage.css";
import MainPageCard from "./MainPageCard";

function MainPage() {
  return (
    <div>
      {moviePoster.map(item => (
        <MainPageCard image={item.image} />
      ))}
    </div>
  );
}

const moviePoster = [
  {
    image: "Images/shinning.jpeg"
  }
];

export default MainPage;
