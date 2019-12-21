import React from "react";
import "./styles.css";

const StargazersItem = ({ item }) => (
  <div className="containerItem">
    {console.log(item)}
    <span className="repo-name">{item.name}</span>
    {item.description !== null ? (
      <p className="repo-description">{item.description}</p>
    ) : null}
    <div className="containerStar">
      <img
        src={require("../../img/star icon.svg")}
        alt="star"
        className="star-icon"
      ></img>
      <span className="star-count">{item.stargazers_count}</span>
    </div>
  </div>
);
export default StargazersItem;
