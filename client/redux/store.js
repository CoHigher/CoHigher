import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
