import React from "react";
import Actor from "./Actor";
import "./style/ActorsList.css";

function ActorsList({ castInfo }) {
  return (
    <div className="actorListContainer">
      <h3>Headline</h3>
      <ul className="actorsList">
        {castInfo.cast
          .filter((person, i) => {
            return i < 6;
          })
          .map((person, i) => {
            return (
              <Actor
                key={i}
                name={person.name}
                image={person.profile_path}
                role={person.role}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ActorsList;
