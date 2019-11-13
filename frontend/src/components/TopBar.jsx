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
  openCloseSlide = () => {
    this.setState({ searching: !this.state.searching });
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
              {this.props.isLoggedIn && (
                <li style={{ color: "white" }}>
                  Logged in as: {this.props.user.username}
                  <NavLink to="/userAccount">MyAccount</NavLink>
                  <p onClick={() => this.props.handleLogOut()}>Log out</p>
                </li>
              )}
              <li>
                <Modal
                  handleLogIn={this.props.handleLogIn}
                  notification={this.props.notification}
                />
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
                    <input
                      id="searchingBarre"
                      type="text"
                      placeholder="Search a Genre..."
                    ></input>
                    <div
                      onClick={event => {
                        this.openCloseSlide();
                      }}
                    >
                      <GenreList />
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
