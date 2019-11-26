import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "store/reducers";

const enhancers = composeWithDevTools(applyMiddleware(thunk))
export default createStore(
  reducers,
  enhancers
);
