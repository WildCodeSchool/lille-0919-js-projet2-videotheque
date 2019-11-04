import React from "react";
import "./PlaylistUser.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
  "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
  "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
  "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
  "http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/14/60/18363837.jpg",
  "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
  "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg"
];

const properties = {
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
