import React, { useState } from "react";
import SearchBar from "../../components/searchBar";
import { Container, Row, Col } from "react-grid-system";
import api from "../../services/apiGitHub";
import "./styles.css";

function Home(props) {
  const [username, setUsername] = useState("");

  async function handlerSumbmit(event) {
    event.preventDefault();
    await api.get(`/users/${username}`).then(result => {
      props.history.push(`/result/${username}`);
    });
  }

  function handlerUserName(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="Home">
      <Container fluid>
        <Row>
          <Col className="containerTitle">
            <span className="Github-Search">GitHub</span>
            <span className="Github-Search text-style-1"> Search</span>
          </Col>
        </Row>
        <SearchBar
          onChange={handlerUserName}
          onSearch={handlerSumbmit}
          value={username}
        ></SearchBar>
      </Container>
    </div>
  );
}

export default Home;
