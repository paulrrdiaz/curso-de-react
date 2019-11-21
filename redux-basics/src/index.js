import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import { Provider } from "react-redux";

const add10 = x => x + 10;
const multiply5 = x => x * 5;
const minus3 = x => x - 3;

const minus3multiply5add10 = compose(add10, multiply5, minus3);
// console.log(minus3multiply5add10(4));
const initialStateMessage = {
  messages: []
};

const initialStateCounter = {
  current: 0
};

const messageReducer = (state = initialStateMessage, action) => {
  return state;
};

const counterReducer = (state = initialStateCounter, action) => {
  if (action.type === "ADD") {
    return {
      current: state.current + action.payload.amount
    };
  }

  return state;
};

const reducers = combineReducers({
  counter: counterReducer,
  message: messageReducer
});

const logger = store => next => action => {
  const prevState = store.getState();
  const returnValue = next(action);
  const nextState = store.getState();
  console.log(`action ${action.type} from middleware`);
  console.log(
    "%c prevState",
    "color: #4cd137",
    JSON.stringify(prevState, null, 2)
  );
  console.log(
    "%c nextState",
    "color: #e84118",
    JSON.stringify(nextState, null, 2)
  );

  return returnValue;
};

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const action = {
//   type: 'ADD',
//   payload: {
//     amount: 5,
//   }
// }

// const actionCreator = amount => ({
//   type: 'ADD',
//   payload: {
//     amount,
//   }
// })

// store.dispatch(action)
// store.dispatch(actionCreator(10))
// store.dispatch(actionCreator(-25))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
