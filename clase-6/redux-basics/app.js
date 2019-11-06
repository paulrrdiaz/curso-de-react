import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./app.scss";
import reducers from "./store";
import CounterContainer from "./containers/CounterContainer";
import ValidatorContainer from "./containers/ValidatorContainer";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <div className="app-wrapper">
      <CounterContainer />
      <ValidatorContainer />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
