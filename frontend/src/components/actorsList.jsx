import React from "react";
import "./actorsList.css";

const list = [
  { name: "Joaquin Phoenix", image: "./public/pictures/joaquin.png" },
  { name: "Robert De Niro", image: "./public/pictures/robert.jpg" },
  { name: "Zazie Beetz", image: "./public/pictures/zazie.jpg" },
  { name: "Frances Conroy", image: "./public/pictures/frances.jpg" },
  { name: "Brett Cullen", image: "./public/pictures/brett.jpg" }
];

function ActorsList() {
  return (
    <ul className="actorsList">
      {list.map((person, i) => {
        return <Actor key={i} name={person.name} image={person.image} />;
      })}
    </ul>
  );
}

function Actor(props) {
  console.log(props);
  return (
    <li>
      <h1>{props.name}</h1>
      <img src={props.image} />
    </li>
  );
}

export default ActorsList;
