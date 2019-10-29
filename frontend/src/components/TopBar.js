import React from "react";
import { NavLink } from "react-router-dom";
import "./topBar.css";

const TopBar = () => (
  <header className="topBar">
    <nav className="topBarNavigation">
      <div className="topBarLogo">
        <NavLink activeClassName="active" to="/">
          MyMovies
        </NavLink>
      </div>

      <div className="spacer" />

      <div className="topBarNavigationItems">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              <img
                id="logoUser"
                alt="logoUser"
                src="logoUser.jpg"
                onclick="location.href='user connexion link'"
              />
            </NavLink>
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
