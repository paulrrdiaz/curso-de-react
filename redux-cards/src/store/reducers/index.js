import { combineReducers } from "redux";
import lists from "./lists";
import cards from "./cards";
import users from "./users";
import drinks from "./drinks";

export default combineReducers({
  lists,
  cards,
  users,
  drinks
});
