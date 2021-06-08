import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./css/Dashboard.css";
import axios from "axios";
import Loading from "../images/loading.gif";
export default class Dashboard extends Component {
  state = {
    query: "",
  };

  handleSearch = async (ev) => {
    // implementation of handleSearch using
    // https://api.github.com/search/users?q=pranis
    ev.preventDefault();
    try {
      this.props.setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${this.state.query}`
      );
      this.props.handleUserSearch(res.data.items);
      this.props.setLoading(false);
    } catch {
      console.log("Something went wrong");
    }
  };
  render() {
    return (
      <>
        <h2>Dashboard</h2>
        <div className="searchBar">
          <form onSubmit={this.handleSearch}>
            <input
              value={this.state.query}
              onChange={(ev) => {
                this.setState({ query: ev.target.value });
              }}
              type="text"
              className="search_input"
              placeholder="Enter a keyword to search..."
            ></input>
          </form>
        </div>
        <div className="dashboardContainer">
          {this.props.loading ? (
            <img className="loadingImage" src={Loading} alt="Loading" />
          ) : (
            this.props.users
              ?.filter((user) => {
                return user.login.startsWith(this.state.query);
              })
              .map((user) => {
                return (
                  <Card
                    avatar_url={user.avatar_url}
                    login={user.login}
                    github_link={user.html_url}
                  />
                );
              })
          )}
        </div>
      </>
    );
  }
}
Dashboard.propTypes = { users: PropTypes.object.isRequired };
