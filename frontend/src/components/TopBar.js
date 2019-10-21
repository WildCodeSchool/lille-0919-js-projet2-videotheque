import React from "react";
import "./topBar.css";

const TopBar = () => (
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
                onclick="location.href='user connexion link'"
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

export default TopBar;
