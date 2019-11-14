import React from "react";
import "./style/ActorsList.css";

class Actor extends React.Component {
  render() {
    if (this.props.image == null) {
      return (
        <li>
          <img src={`/pictures/defaultActor.jpg`} alt={this.props.image} />
          <p className="actorName">{this.props.name}</p>
          <p>{this.props.role}</p>
        </li>
      );
    } else {
      return (
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.image}
          />
          <p className="actorName">{this.props.name}</p>
          <p>{this.props.role}</p>
        </li>
      );
    }
  }
}

export default Actor;
