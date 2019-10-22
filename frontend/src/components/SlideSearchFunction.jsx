import React from "react";
import "./SlideSearchFunction.css";
import GenreList from "./GenreList";

class SlideSearchFunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: true
    };
  }
  render() {
    return (
      <div>
        <button //button search should be in the topBar after merge
          className="searchBarButton"
          onClick={event => {
            let newSearching = !this.state.searching;
            this.setState({ searching: newSearching });
          }}
        >
          ?
        </button>
        <div
          className={this.state.searching ? "noEntrySearch" : "enterYourSearch"}
        >
          <input id="searchingBarre" type="text" placeholder="Search.."></input>
          <GenreList />
        </div>
      </div>
    );
  }
}

export default SlideSearchFunction;
