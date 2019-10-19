import React from "react";
import "./SlideSearchFunction.css";

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
        <button
          className="searchingButton"
          onClick={event => {
            let newSearching = !this.state.searching;
            this.setState({ searching: newSearching });
          }}
        >
          ?
        </button>
        <div
          className={this.state.searching ? "noEntrySearch" : "enterYourSearch"}
        ></div>
      </div>
    );
  }
}

export default SlideSearchFunction;
