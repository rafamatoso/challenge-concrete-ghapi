import React from "react";

import "./styles.css";

function SearchBar() {
  return (
    <div className="containerSearchBar">
      <form className="search-input">
        <input type="search" id="text"></input>
      </form>
      <button>
        <img
          src="img/search-icon.svg"
          className="Search-Icon"
          alt="Search-Icon"
        />
      </button>
    </div>
  );
}

export default SearchBar;
