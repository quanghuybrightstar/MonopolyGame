/* eslint-disable no-unused-vars */
import Constants from "../constants/constants";

export const increaseMonopolyTickets = (countTickets) => ({
  type: Constants.INCREASE_MONOPOLY_TICKETS,
  payload: countTickets,
});

export const decreaseMonopolyTickets = (countTickets) => ({
  type: Constants.DECREASE_MONOPOLY_TICKETS,
  payload: countTickets,
});

export const increaseDiamonds = (countDiamonds) => ({
  type: Constants.INCREASE_DIAMONDS,
  payload: countDiamonds,
});

export const decreaseDiamonds = (countDiamonds) => ({
  type: Constants.DECREASE_DIAMONDS,
  payload: countDiamonds,
});

export const setDetailPlatform = (detail) => ({
  type: Constants.SET_DETAIL_PLATFORM,
  payload: detail,
});

export const setDetailDiamond = (diamond) => ({
  type: Constants.SET_DETAIL_DIAMONDS,
  payload: diamond,
});
