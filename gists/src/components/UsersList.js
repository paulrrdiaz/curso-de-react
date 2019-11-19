import React from "react";
import User from "src/components/User";

export default ({data: users}) => {
  return users.map(user => <User key={user.id} {...user} />);
};
