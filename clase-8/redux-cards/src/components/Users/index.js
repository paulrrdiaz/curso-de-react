import React from "react";

import CreateUser from "components/CreateUser";
import User from "containers/User";
import { UsersTitle } from "./styled";

export default ({ users }) => {
  return (
    <div>
      <UsersTitle>Users</UsersTitle>
      <CreateUser />
      {users.map(id => (
        <User key={id} id={id} />
      ))}
    </div>
  );
};
