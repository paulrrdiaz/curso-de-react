import { combineReducers } from "redux";
import cards from "store/reducers/cards";
import lists from "store/reducers/lists";
import users from "store/reducers/users";
import drinks from "store/reducers/drinks";
import status from "store/reducers/status";

export default combineReducers({
  lists,
  cards,
  users,
  drinks,
  status
});
