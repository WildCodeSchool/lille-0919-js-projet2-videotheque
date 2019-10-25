import React from "react";
import "./MoviePage.css";

function MoviePage(props) {
  return (
    <div id="around">
      <div id="movieTitleContainer">
        <div id="movieMainJacket">
          <img
            id="movieMainJacketImg"
            src={props.picture}
            alt={props.title}
          ></img>
        </div>
        <div id="movieDescAndIcons">
          <div id="movieDescription">
            <h2>{props.title}</h2>
            <p>
              <span className="oneRedWord">By</span> {props.by}
            </p>
            <p>
              <span className="oneRedWord">With</span> {props.with}...
            </p>
            <p>
              <span className="oneRedWord">Genre</span> {props.genre}
            </p>
            <p>
              <span className="oneRedWord">Released at</span>{" "}
              {props.releasedDate}
            </p>
            <p>
              <span className="oneRedWord">Runtime</span> {props.duration}
            </p>
          </div>
          <div id="movieIconsContainer">
            <img id="moviePlusIcons" src="./plusIcon.png" alt="add" />
            <img id="movieLikeIcons" src="./likeIcon.png" alt="like" />
            <img id="movieNavetIcons" src="./navetIcon.png" alt="navet" />
          </div>
        </div>
      </div>
      <div id="synopsisContainer">
        <hr />
        <h3>Synopsis</h3>
        <p>{props.synopsis}</p>
      </div>
    </div>
  );
}

export default MoviePage;
