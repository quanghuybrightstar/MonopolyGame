/* eslint-disable no-unused-vars */
import Constants from "../constants/constants";
import { combineReducers } from "redux";

const initState = {
  countTickets: null,
  countDiamonds: null,
  detailPlatform: null,
  quantity_diamond: null,
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
    case Constants.SET_DETAIL_PLATFORM:
      return { ...state, detailPlatform: action.payload };
    case Constants.SET_DETAIL_DIAMONDS:
      return { ...state, quantity_diamond: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
