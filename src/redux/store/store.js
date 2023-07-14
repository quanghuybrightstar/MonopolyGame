/* eslint-disable no-unused-vars */
import Constants from "../constants/constants";
import rootReducer from "../reducers/reducers";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
