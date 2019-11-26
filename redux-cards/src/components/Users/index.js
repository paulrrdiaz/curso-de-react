import React from "react";

import CreateUser from "containers/CreateUser";
import User from "containers/User";
import { UsersTitle } from "./styles";

export default ({ users }) => {
  return (
    <div>
      <UsersTitle>Users</UsersTitle>
      <CreateUser />
      {users.map(id => (
        <User userId={id} key={id} />
      ))}
    </div>
  );
};
