import React from "react";
import User from "./User";

export default ({ data }) => {
  return (
    <div>
      {data.map(user => {
        return <User key={user.email} {...user} />;
      })}
    </div>
  );
};
