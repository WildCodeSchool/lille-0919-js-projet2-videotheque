import React from "react";

const Search = props => (
  <form className="search" onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
  </form>
);

export default Search;
