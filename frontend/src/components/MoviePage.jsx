import React from "react";
import "./MoviePage.css";

const MoviePage = () => (
  <div id="around">
    <div id="movieTitleContainer">
      <div id="movieMainJacket">
        <img
          id="movieMainJacketImg"
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        ></img>
      </div>
      <div id="movieDescription">
        <h2>Film title</h2>
        <p>
          <span className="oneRedWord">By</span> John Café
        </p>
        <p>
          <span className="oneRedWord">With</span> Anna Blanders, Jim Carrey...
        </p>
        <p>
          <span className="oneRedWord">Released at</span> 1 January, 2019
        </p>
        <p>
          <span className="oneRedWord">Runtime</span> 1h30
        </p>
        <div id="movieIconsContainer">
          <img id="moviePlusIcons" src="./plusIcon.png" />
          <img id="movieLikeIcons" src="./likeIcon.png" />
          <img id="movieNavetIcons" src="./navetIcon.png" />
        </div>
      </div>
    </div>
    <div id="synopsisContainer">
      <hr />
      <h3>Synopsis</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
        facilisis arcu, non euismod nulla elementum nec. Sed et ullamcorper
        massa. Vivamus laoreet dolor id aliquet placerat. Vivamus faucibus porta
        neque et faucibus. Quisque lobortis aliquet orci, a facilisis sem
        imperdiet a. Fusce in enim dui. Praesent vulputate tellus ut libero
        tempor molestie. Vivamus turpis massa, mattis eu luctus sed, egestas non
        nunc. Proin ut mauris id odio vestibulum porttitor in sit amet erat.
        Nullam magna nulla, cursus eget nunc quis, tempus faucibus sapien. Fusce
        vestibulum consectetur sagittis. Phasellus arcu augue, lobortis sed diam
        vel, viverra vulputate ipsum. Fusce...
      </p>
    </div>
  </div>
);

export default MoviePage;
