import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "store/reducers";

const enhancers = composeWithDevTools(applyMiddleware(thunk));

export default createStore(reducers, enhancers);
