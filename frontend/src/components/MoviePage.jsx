import React from "react";
import "./MoviePage.css";

const MoviePage = () => (
  <div className="around">
    <div className="movieTitleContainer">
      <div className="movieMainJacket">
        <img
          className="movieMainJacketImg"
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        ></img>
      </div>
      <div className="movieDescription">
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
      </div>
    </div>
    <hr></hr>
  </div>
);

export default MoviePage;
