import React from "react";
import "./PlaylistUser.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/64/25/05/19199449.jpg",
  "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/65/19/82/18835952.jpg",
  "http://fr.web.img6.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/medias/nmedia/18/70/03/08/19109117.jpg",
  "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/11/11/36/5168199.jpg",
  "http://fr.web.img6.acsta.net/c_215_290/pictures/19/04/03/14/15/2748213.jpg",
  "http://fr.web.img6.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/medias/nmedia/18/70/03/08/19109117.jpg",
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
  "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg"
];

const properties = {
  infinite: true,
  indicators: false,
  arrows: false,

  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <div id="myMoviesLibrary">
        <h1>My Movies Library </h1>
        <hr></hr>
      </div>

      <div id="movieIconsFavTitre">
        <img id="movieLikeIcons" src="./likeIcon.png" alt="like" />
        <div>
          <h1>favorites</h1>
        </div>
      </div>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
      </Slide>
      <div id="movieIconsPlusTitre">
        <img id="moviePlusIcons" src="./plusIcon.png" alt="add" />
        <div>
          <h1>to see</h1>
        </div>
      </div>

      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
      </Slide>
      <div id="movieIconsNavetTitre">
        <img id="movieNavetIcons" src="./navetIcon.png" alt="navet" />
        <div>
          <h1>dislike</h1>
        </div>
      </div>

      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;

/*{slideImages.map(image => {
  return (
    <div style={{ backgroundImage: `url(${image.image})` }}></div>
  );
})}*/
