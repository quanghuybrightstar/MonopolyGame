/* eslint-disable no-unused-vars */
import Constants from "../constants/constants";
import { combineReducers } from "redux";

const initState = {
  countTickets: 10,
  countDiamonds: 1000,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case Constants.INCREASE_MONOPOLY_TICKETS:
      return { ...state, countTickets: state.countTickets + action.payload };
    case Constants.DECREASE_MONOPOLY_TICKETS:
      return { ...state, countTickets: state.countTickets - action.payload };
    case Constants.INCREASE_DIAMONDS:
      return { ...state, countDiamonds: state.countDiamonds + action.payload };
    case Constants.DECREASE_DIAMONDS:
      return { ...state, countDiamonds: state.countDiamonds - action.payload };
    default:
      return state;
  }
};

export default rootReducer;
