import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Dashboard";
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
                path="/user/:id"
                render={(props) => {
                  console.log(props);
                  return <h1>Hello world {props.match.params.id}</h1>;
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

function Home() {
  return "Home page";
}
function About() {
  return "About page";
}
function Contact() {
  return "Contact Page";
}
