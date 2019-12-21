import React, { useState } from "react";
import SearchBar from "../../components/searchBar";
import { Container, Row, Col } from "react-grid-system";
import api from "../../services/apiGitHub";
import "./styles.css";

function Home(props) {
  const [username, setUsername] = useState("");

  async function handlerSumbmit(event) {
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
          onSearch={handlerSumbmit}
          value={username}
        ></SearchBar>
      </div>
    </div>
  );
}

export default Home;
