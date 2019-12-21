import React, { useState } from "react";
import SearchBar from "../../components/searchBar";
import "./styles.css";

function Home(props) {
  const [username, setUsername] = useState("");

  async function handlerSubmit(event) {
    event.preventDefault();
    props.history.push(`/result/${username}`);
  }

  function handlerUserName(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="Home">
      <div>
        <span className="Github-Search">GitHub</span>
        <span className="Github-Search text-style-1"> Search</span>
      </div>
      <div className="widthSearchBar">
        <SearchBar
          onChange={handlerUserName}
          onSearch={handlerSubmit}
          value={username}
        ></SearchBar>
      </div>
    </div>
  );
}

export default Home;
