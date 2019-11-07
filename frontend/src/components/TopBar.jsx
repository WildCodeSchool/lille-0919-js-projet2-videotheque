import React from "react";
import "./style/topBar.css";
import "./style/SlideSearchFunction.css";
import GenreList from "./GenreList";
import Modal from "./Modal";
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
              <img
                className="logo"
                src="/pictures/logoMyMovies.png"
                alt="logo"
              />
            </NavLink>
            <h1>MyMovies</h1>
          </div>
          <div className="spacer" />
          <div className="topBarNavigationItems">
            <ul>
              <li>
                <Modal />
              </li>
              <li>
                <button
                  className="searchBarButton"
                  onClick={event => {
                    let newSearching = !this.state.searching;
                    this.setState({ searching: newSearching });
                  }}
                />
                <img
                  id="pictoLoupe"
                  alt="pictoLoupe"
                  src="/pictures/pictoLoupe.png"
                  className="searchBarButton"
                  onClick={event => {
                    let newSearching = !this.state.searching;
                    this.setState({ searching: newSearching });
                  }}
                />
                <div
                  className={
                    this.state.searching ? "noEntrySearch" : "movieGenre"
                  }
                  onClick={event => {
                    let newSearching = !this.state.searching;
                    this.setState({ searching: newSearching });
                  }}
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
                    <GenreList />
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
