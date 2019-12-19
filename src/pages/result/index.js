import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar";
import { Container, Row, Col } from "react-grid-system";
import api from "../../services/apiGitHub";
import { useParams } from "react-router-dom";
import "./styles.css";

function Result() {
  const [user, setUser] = useState({});

  const [repos, setRepos] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    async function getApi() {
      await api.get(`${search}`).then(result => {
        setUser(result.data);
      });
      await api.get(`${search}/repos`).then(result => {
        setRepos(result.data);
      });
    }
    getApi();
  }, [search]);

  return (
    <>
      <Container fluid>
        <Row className="containerHeader">
          <Col md={4}>
            <span className="Github-Search">GitHub</span>
            <span className="Github-Search text-style-1"> Search</span>
          </Col>
          <Col>
            <SearchBar></SearchBar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Result;
