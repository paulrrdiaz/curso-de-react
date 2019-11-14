import React, { Component } from "react";
import fuzzysearch from "fuzzysearch";

import UsersList from "../components/UsersList";
import SearchUser from "../components/SearchUser";

const API = "https://randomuser.me/api/?results=50";

class UsersContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filteredUsers: []
    };

    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(value) {
    const { users } = this.state;
    const filteredUsers = users.filter(({ name, email }) => {
      const { first, last } = name;
      return (
        fuzzysearch(value.toLowerCase(), first.toLowerCase()) ||
        fuzzysearch(value.toLowerCase(), last.toLowerCase()) ||
        fuzzysearch(value.toLowerCase(), email.toLowerCase())
      );
    });

    this.setState({
      filteredUsers
    });
  }

  render() {
    const { users, filteredUsers } = this.state;
    const currentUsers = filteredUsers.length ? filteredUsers : users;
    return (
      <React.Fragment>
        <SearchUser handleFilter={this.handleFilter} />
        <UsersList users={currentUsers} />
      </React.Fragment>
    );
  }
}

export default UsersContainer;
