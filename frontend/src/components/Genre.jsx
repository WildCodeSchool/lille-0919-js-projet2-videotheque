import React from "react";
import "./Genre.css";

class Genre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }
  render() {
    return (
      <div className="genre">
        <a href=" ">
          <img
            key={this.props.genreName}
            alt={this.props.genreName}
            src={this.props.genreBackground}
          />
          <h1>{this.props.genreName}</h1>
        </a>
      </div>
    );
  }
}
export default Genre;
