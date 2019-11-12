import React from 'react'
import User from "./User";

export default ({ users = [] }) => {
  return users.map(user => <User key={user.phone} {...user} />)
}