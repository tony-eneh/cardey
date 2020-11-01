import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { loggingMiddleware } from "../middleware";

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(loggingMiddleware, thunk)
);

export default store;
