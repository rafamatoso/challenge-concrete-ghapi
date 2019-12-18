import React from "react";
import SearchBar from "../components/searchBar";
import "./styles.css";

function Home() {
  return (
    <div className="Home">
      <div>
        <span className="Github-Search">GitHub</span>
        <span className="Github-Search text-style-1"> Search</span>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default Home;
