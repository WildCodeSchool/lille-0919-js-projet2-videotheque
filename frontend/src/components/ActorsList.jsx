import React from "react";
import "./ActorsList.css";

const list = [
  {
    name: "Joaquin Phoenix",
    role: "Arthur Fleck",
    image: "./pictures/joaquin.jpg"
  },
  {
    name: "Robert DeNiro",
    role: "Murray Franklin",
    image: "./pictures/robert.jpg"
  },
  { name: "Zazie Beetz", role: "Sophie Dumond", image: "./pictures/zazie.jpg" },
  {
    name: "Frances Conroy",
    role: "Penny Fleck",
    image: "./pictures/frances.jpg"
  },
  { name: "Brett Cullen", role: "Thomas Wayne", image: "./pictures/brett.jpg" }
];

function ActorsList() {
  return (
    <div>
      <h1>HEADLINE</h1>
      <ul className="actorsList">
        {list.map((person, i) => {
          return (
            <Actor
              key={i}
              name={person.name}
              image={person.image}
              role={person.role}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Actor(props) {
  return (
    <li>
      <img src={props.image} />
      <p className="actorName">{props.name}</p>
      <p>{props.role}</p>
    </li>
  );
}

export default ActorsList;
