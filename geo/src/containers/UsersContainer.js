import React, { Component } from "react";
import UsersList from "../components/UsersList";

const API = "https://randomuser.me/api/?results=50";

class UsersContainer extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const { results } = data;
        console.log(results);
        
        this.setState({
          users: results
        });
      });
  }

  render() {
    const { users } = this.state;
    return <UsersList users={users} />;
  }
}

export default UsersContainer;
