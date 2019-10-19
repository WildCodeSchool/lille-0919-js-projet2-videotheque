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
        <button //button a placé dans le top bar
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
        >
          <input id="searchingBarre" type="text" placeholder="Search.."></input>
        </div>
      </div>
    );
  }
}

export default SlideSearchFunction;
