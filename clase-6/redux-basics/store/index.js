import { combineReducers } from "redux";

import counterReducer from "./reducers/counter";
import messageReducer from "./reducers/message";

export default combineReducers({
  message: messageReducer,
  counter: counterReducer
});
