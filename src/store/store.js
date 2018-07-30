import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers/combineReducer";
import thunk from "redux-thunk";
//import middlewares from "../middlewares/middlewares";

const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
