import { v4 } from "uuid";

export const ADD_USERS = "ADD_USERS";

export const addUser = user => ({
  type: ADD_USERS,
  payload: {
    user,
    userId: v4()
  }
});
