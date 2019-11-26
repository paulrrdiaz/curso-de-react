import { users as initialState } from "data/normalized";
import { ADD_USERS } from "store/actions/users";
import { addEntity } from "helpers/data";

export default (state = initialState, action) => {
  if (action.type === ADD_USERS) {
    const { userId, user } = action.payload;

    return addEntity(userId, user, state);
  }

  return state;
};
