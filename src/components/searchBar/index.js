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
          value={props.value}
          placeholder="Search for a User"
          className="search-text"
        ></input>
        <button type="submit" disabled={props.value === "" ? true : false}>
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
