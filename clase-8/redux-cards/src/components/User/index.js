import React from "react";

import { User, UserPicture, UserDetails, UserName, UserEmail } from './styled'

export default ({ name = "Default User's name", email = "default@email" }) => {
  return (
    <User>
      <UserPicture>
        <img src="https://placeimg.com/200/200/any" alt="" />
      </UserPicture>
      <UserDetails>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </UserDetails>
    </User>
  );
};
