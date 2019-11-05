import React from "react";
import "./style/topBar.css";
import "./style/SlideSearchFunction.css";
import GenreList from "./GenreList";
import { NavLink } from "react-router-dom";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: true
    };
  }
  render() {
    return (
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
                    src="pictures/logoUser.jpg"
                  />
                </NavLink>
              </li>
              <li>
                <button
                  className={`searchBarButton ${
                    this.state.searching ? "EntrySearch" : "noEntrySearch"
                  }`}
                  onClick={event => {
                    let newSearching = !this.state.searching;
                    this.setState({ searching: newSearching });
                  }}
                >
                  <img
                    id="pictoLoupe"
                    alt="pictoLoupe"
                    src="pictures/pictoLoupe.png"
                  />
                </button>
              </li>
              <li>
                <button
                  className={`searchBarButton ${
                    this.state.searching ? "noEntrySearch" : "EntrySearch"
                  }`}
                  onClick={event => {
                    let newSearching = !this.state.searching;
                    this.setState({ searching: newSearching });
                  }}
                >
                  <img id="close" alt="close" src="pictures/Red-Cross.png" />
                </button>
                <div
                  className={
                    this.state.searching ? "noEntrySearch" : "movieGenre"
                  }
                >
                  <div
                    className={
                      this.state.searching ? "noEntrySearch" : "enterYourSearch"
                    }
                  >
                    <input
                      id="searchingBarre"
                      type="text"
                      placeholder="Search.."
                    ></input>
                    <GenreList
                      onClick={event => {
                        let newSearching = !this.state.searching;
                        this.setState({ searching: newSearching });
                      }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default TopBar;
