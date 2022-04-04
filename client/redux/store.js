import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { jobReducer } from "./jobReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  jobs: jobReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
