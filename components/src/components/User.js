import React, { Component } from 'react'
import axios from "axios";
export default class User extends Component {
    state = {
        repos: [],
        user: {},
    };
    async componentDidMount() {
        const username = this.props.params.username;

        const data = await Promise.all([
            axios.get(
                `https://api.github.com/users/${username}/repos?page=1&per_page=4`
            ),
            axios.get(
                `https://api/github.com/users/${username}`
            )]);
        this.setState({ repos: data[1].data, user: data[0].data })
        // const req = await axios.get(`https://api.github.com/users/${username}/repos?page=1&per_page=4`);
        // const req1 = await axios.get(`https://api/github.com/users/${username}`);
        // this.setState({ repos: req.data, user: req1.data });
    }
    render() {
        return <pre> {JSON.stringify(this.state.user, null, 2)}</pre>;
    }
}
