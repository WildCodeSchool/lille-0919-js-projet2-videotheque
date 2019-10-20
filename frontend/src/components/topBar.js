import React from "react";
import "./topBar.css";

const topBar = () => (
  <header className="topBar">
    <nav className="topBar_navigation">
      <div className="topBar_logo">
        <a href="homeWebsite">MyMovies</a>
      </div>

      <div className="spacer" />

      <div className="topBar_navigation_items">
        <ul>
          <li>
            <a href="userConnexion">
              <img
                id="logoUser"
                alt="logoUser"
                src="logoUser.jpg"
                onclick="location.href='http://www.allocine.fr/film/fichefilm_gen_cfilm=61282.html'"
              />
            </a>
          </li>
          <li>
            <button className="searchBarButton">
              <img id="pictoLoupe" alt="pictoLoupe" src="pictoLoupe.png" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default topBar;

/*<img
  id="logoWebsite"
  alt="logoWebsite"
  src=""
  onclick="location.href='http://www.allocine.fr/film/fichefilm_gen_cfilm=61282.html'"
  />*/
