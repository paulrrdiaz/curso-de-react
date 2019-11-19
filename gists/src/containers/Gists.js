import React, { Component } from "react";
import GistsList from "src/components/GistsList";
import UsersList from "src/components/UsersList";
import withData from "src/HOCs/withData";

.some-class {background: red;padding: 2em;border: 1px solid black;}

const users = ["gaearon", "paulrrdiaz", "GrahamcOfBorg"];

export default class extends Component {
  render() {
    const getUrl = user => `https://api.github.com/users/${user}/gists`;
    const GistsListWithData = withData(getUrl)(GistsList);
    const UsersListWithData = withData(
      "https://jsonplaceholder.typicode.com/users"
    )(UsersList);

    return (
      <div className="gists">
        <h1>Gists</h1>
        <div className="app-wrapper">
          {users.map((user, index) => (
            <GistsListWithData key={`user-${index + 1}`} user={user} />
          ))}
        </div>
        <div className="app-wrapper">
          <UsersListWithData />
        </div>
      </div>
    );
  }
}
