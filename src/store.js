import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Weather } from "./components/weather/reducers";
import { Loader } from "./components/loader/reducers";
const appReducerList = combineReducers({
  Weather,
  Loader
});

const appReducers = (state, action) => {
  return appReducerList(state, action);
};

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const dispatch = store.dispatch;
export default store;
