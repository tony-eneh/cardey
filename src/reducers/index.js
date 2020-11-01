import { DISPLAY_CARD_INFO } from "../constants";

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_CARD_INFO:
      return { ...state, ...action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
