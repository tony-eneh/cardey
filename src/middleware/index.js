import { DISPLAY_CARD_INFO } from "../constants";
import store from "../store";

export const displayCardAction = (dispatch, getState) => () => {
  fetch("https://api.mocki.io/v1/eaf124bb")
    .then((response) => response.json())
    .then((data) => {
      console.log("api call returned this:", data);
      store.dispatch(setCardAction(data));
    });
};

const setCardAction = (data) => {
  console.log("setCardAction creator finally called with data:", data);
  return { type: DISPLAY_CARD_INFO, payload: data };
};

export const loggingMiddleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  console.log(
    "%c before state change",
    "background:yellow;color:black",
    getState()
  );
  next(action);
  console.log(
    "%c after state change",
    "background:fuchsia;color:white",
    getState()
  );
};
