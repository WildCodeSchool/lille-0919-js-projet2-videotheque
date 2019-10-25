import React from "react";
import "./ActorsList.css";

function Actor(props) {
  return (
    <li>
      <img src={props.image} alt={props.image} />
      <p className="actorName">{props.name}</p>
      <p>{props.role}</p>
    </li>
  );
}

export default Actor;
