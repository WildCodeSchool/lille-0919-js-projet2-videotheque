import React from "react";
import "./style/topBar.css";
import "./style/SlideSearchFunction.css";
import GenreList from "./GenreList";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import Search from "./Search";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: true,
      inputValue: ""
    };
  }
  openCloseSlide = () => {
    this.setState({ searching: !this.state.searching });
  };
  onInput = inputValue => {
    this.setState({ inputValue });
    console.log(
      inputValue.charAt(0).toUpperCase() + inputValue.substring(1).toLowerCase()
    );
  };
  render() {
    return (
      <header className="topBar">
        <nav className="topBarNavigation">
          <div className="topBarLogo">
            <NavLink activeClassName="active flex" to="/">
              <img
                className="logo"
                src="/pictures/logoMyMovies.png"
                alt="back Home-Page"
              />

              <h1>MyMovies</h1>
            </NavLink>
          </div>
          <div className="spacer" />
          <div className="topBarNavigationItems">
            <ul>
              <li>
                <Modal />
              </li>
              <li>
                <button
                  className={`searchBarButton ${
                    this.state.searching ? "EntrySearch" : "noEntrySearch"
                  }`}
                  onClick={event => {
                    this.openCloseSlide();
                  }}
                >
                  <img
                    id="pictoLoupe"
                    alt="pictoLoupe"
                    src="/pictures/bobine-film.png"
                  />
                </button>
              </li>
              <li>
                <button
                  className={`searchBarButton ${
                    this.state.searching ? "noEntrySearch" : "EntrySearch"
                  }`}
                  onClick={event => {
                    this.openCloseSlide();
                  }}
                >
                  <img id="close" alt="close" src="/pictures/Red-Cross.png" />
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
                    <Search
                      onInput={this.onInput}
                      placeholder="Search a genre..."
                    />
                    <div
                      onClick={event => {
                        this.openCloseSlide();
                      }}
                    >
                      <GenreList input={this.state.inputValue} />
                    </div>
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
