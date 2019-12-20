import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar";
import StargazersItem from "../../components/stargazersItem";
import { Container, Row, Col } from "react-grid-system";
import api from "../../services/apiGitHub";
import { useParams } from "react-router-dom";
import "./styles.css";

function Result() {
  const [user, setUser] = useState({});

  const [repos, setRepos] = useState([]);

  //console.log({ repos, user });

  const { search } = useParams();

  useEffect(() => {
    async function getApi() {
      let per_page;
      await api.get(`/users/${search}`).then(result => {
        setUser(result.data);
        per_page = result.data.public_repos;
      });
      await api
        .get(`/users/${search}/repos`, {
          params: { per_page }
        })
        .then(result => {
          setRepos(result.data);
        });
    }
    getApi();
  }, [search]);

  return (
    <>
      <div className="Result">
        <Container fluid>
          <Row className="containerHeader">
            <Col md={4}>
              <span className="Github-Search">GitHub</span>
              <span className="Github-Search text-style-1"> Search</span>
            </Col>
            <Col md={8}>
              <SearchBar></SearchBar>
            </Col>
          </Row>
          <Row className="containerBody">
            <Col md={4} className="containerColUserInfo">
              <img
                src={user.avatar_url}
                className="user-avatar"
                alt="User-Avatar"
              ></img>
              <p>{user.name}</p>
              <p>{user.login}</p>
              <p>{user.bio}</p>
              <p>{user.email}</p>
              <p>{user.followers}</p>
              <p>{user.following}</p>
            </Col>
            <Col md={8} className="containerColReposInfo">
              {repos
                .sort(
                  (previous, current) =>
                    current.stargazers_count - previous.stargazers_count
                )
                .map(item => (
                  <div key={item.id}>
                    <StargazersItem item={item}></StargazersItem>
                  </div>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Result;
