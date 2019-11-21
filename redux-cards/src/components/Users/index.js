import React from "react";

import CreateUser from "components/CreateUser";
import User from "components/User";
import { UsersTitle } from "./styles";

export default () => {
  return (
    <div>
      <UsersTitle>Users</UsersTitle>
      <CreateUser />
      {[1, 2].map(id => (
        <User key={id} />
      ))}
    </div>
  );
};
