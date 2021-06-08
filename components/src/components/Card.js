import React from "react";
import PropTypes from "prop-types";
import "./css/Card.css";
function Card(props) {
  return (
    <div className="card">
      <img src={props.avatar_url} alt={props.login} />
      <h4>{props.login}</h4>
      <a href={props.github_link}>Github Link</a>
    </div>
  );
}

Card.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  github_link: PropTypes.string.isRequired,
};
export default Card;
