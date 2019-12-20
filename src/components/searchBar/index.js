import React from "react";
import "./styles.css";

function SearchBar(props) {
  return (
    <>
      <form className="search-input" onSubmit={props.onSearch}>
        <input
          onChange={props.onChange}
          type="search"
          id="text"
          value={props.username}
        ></input>
        <button type="submit">
          <img
            src={require("../../img/search-icon.svg")}
            className="Search-Icon"
            alt="Search-Icon"
          />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
