import "../app.scss";
import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";

import counterReducer from "./reducers/counter";
import messageReducer from "./reducers/message";

const reducers = combineReducers({
  //message: messageReducer,
  counter: counterReducer
});

const logger = store => next => action => {
  // console.log("I'm a middleware", store);

  return next(action);
};

const store = createStore(reducers, applyMiddleware(logger));

const addAction = {
  type: "ADD",
  payload: {
    amount: 5
  }
};

const addActionCreator = amount => ({
  type: "ADD",
  payload: {
    amount
  }
});
// store.dispatch(addAction);

const unsubscribe = store.subscribe(() => {
  console.log("changed");
});

const binded = bindActionCreators(addActionCreator, store.dispatch);
binded(5);
console.log(store);

binded(7);
unsubscribe();
binded(10);
console.log(store.getState());
// console.log(store.getState());
