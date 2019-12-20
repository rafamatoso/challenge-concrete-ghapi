import React from "react";
import "./styles.css";

const StargazersItem = ({ item }) => (
  <div className="containerItem">
    {console.log(item)}
    <p>{item.name}</p>
    <p>{item.description}</p>
    <p>{item.stargazers_count}</p>
  </div>
);
export default StargazersItem;
