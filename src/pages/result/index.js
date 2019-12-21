import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar";
import StargazersItem from "../../components/stargazersItem";
import UserNotFound from "../../components/userNotFound";
import { Container, Row, Col } from "react-grid-system";
import api from "../../services/apiGitHub";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

function Result(props) {
  const initialState = { exist: false };

  const [user, setUser] = useState(initialState);

  const [repos, setRepos] = useState([]);

  // Used to retrieve route parameter set in Routes Component
  const { search } = useParams();

  const [username, setUsername] = useState(search);

  useEffect(() => {
    async function getApi() {
      let per_page;
      const userTemp = await api
        .get(`/users/${username}`)
        .then(result => {
          setUser(user => ({
            ...user,
            ...result.data,
            exist: true
          }));
          per_page = result.data.public_repos;
          return true;
        })
        .catch(error => {
          setUser(initialState);
          return false;
        });

      if (userTemp) {
        await api
          .get(`/users/${username}/repos`, {
            params: { per_page }
          })
          .then(result => {
            setRepos(result.data);
          });
      }
    }
    getApi();
  }, [search]);

  async function handlerSumbmit(event) {
    event.preventDefault();
    props.history.push(`/result/${username}`);
  }

  function handlerUserName(event) {
    setUsername(event.target.value);
  }

  return (
    <>
      <div className="Result">
        <Container fluid>
          <Row className="containerHeader">
            <Col md={4} className="containerTitle">
              <Link to={"/"} className="no-link">
                <span className="Github-Search title">GitHub</span>
                <span className="Github-Search text-style-1 title">
                  {" "}
                  Search
                </span>
              </Link>
            </Col>
            <Col md={8}>
              <SearchBar
                onChange={handlerUserName}
                onSearch={handlerSumbmit}
                value={username}
              ></SearchBar>
            </Col>
          </Row>
          {user.exist ? (
            <Row>
              <Col md={4} className="containerColUserInfo">
                <img
                  src={user.avatar_url}
                  className="user-avatar"
                  alt="User-Avatar"
                ></img>
                <div className="containerUserInfo">
                  {user.name !== null ? (
                    <span className="user-name">{user.name}</span>
                  ) : null}
                  <span className="user-login">{user.login}</span>
                  {user.bio !== null ? (
                    <span className="user-geral padding-top-bio">
                      {user.bio}
                    </span>
                  ) : null}
                  {user.email !== null ? (
                    <span className="user-geral padding-top-geral">
                      {user.email}
                    </span>
                  ) : null}
                  <div className="containerFollowers">
                    <img
                      src={require("../../img/followers-icon.svg")}
                      alt="followers-icon"
                      className="followers-icon"
                    ></img>
                    <span className="user-geral padding-top-geral">
                      {user.followers}
                    </span>
                  </div>
                  <div className="containerFollowing">
                    <img
                      src={require("../../img/repositorie-icon.svg")}
                      alt="following-icon"
                      className="following-icon"
                    ></img>
                    <span className="user-geral padding-top-geral">
                      {user.following}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={8} className="containerColReposInfo">
                {repos
                  .sort(
                    (previous, current) =>
                      current.stargazers_count - previous.stargazers_count
                  )
                  .map(item => (
                    <div key={item.id} className="containerStargazer">
                      <StargazersItem item={item}></StargazersItem>
                    </div>
                  ))}
              </Col>
            </Row>
          ) : (
            <div className="containerUserNotFound">
              <UserNotFound></UserNotFound>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Result;
