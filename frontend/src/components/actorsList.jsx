import React from "react";
import "./actorsList.css";

const list = [
  /*{
    name: "Todd Phillips",
    role: "director",
    image: "./pictures/todd.jpg"
  },*/

  {
    name: "Joaquin Phoenix",
    role: "Arthur Fleck/Joker",
    image: "./pictures/joaquin.jpg"
  },
  {
    name: "Robert De Niro",
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
  console.log(props);
  return (
    <li>
      <img src={props.image} />
      <p className="actorName">{props.name}</p>
      <p>{props.role}</p>
    </li>
  );
}

export default ActorsList;
