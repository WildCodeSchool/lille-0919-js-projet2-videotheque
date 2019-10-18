import React from "react";
import "./MainPage.css";
import MainPageCard from "./MainPageCard";

function MainPage() {
  return (
    <div className="main-poster">
      {moviePoster.map(item => (
        <MainPageCard image={item.image} />
      ))}
    </div>
  );
}

const moviePoster = [
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  },
  {
    image: "Images/shinning.jpeg"
  }
];

export default MainPage;
