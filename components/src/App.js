import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends Component {
  state = {
    users: null,
    loading: true,
  };
  componentDidMount() {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://api.github.com/users");
        this.setState({ users: res.data, loading: false });
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }

  handleUserSearch = (users) => {
    this.setState({ users: users });
  };

  setLoading = (loading) => {
    this.setState({ loading });
  };
  render() {
    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          <Layout>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Dashboard
                      users={this.state.users}
                      loading={this.state.loading}
                      setLoading={this.setLoading}
                      handleUserSearch={this.handleUserSearch}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/user/:username"
                render={(props) => {
                  console.log(props);
                  return <User params={props.match.params.id} />;
                }}
              ></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>

            {/* <Dashboard
              users={this.state.users}
              loading={this.state.loading}
              setLoading={this.setLoading}
              handleUserSearch={this.handleUserSearch}
            /> */}
          </Layout>
        </div>{" "}
      </Router>
    );
  }
}