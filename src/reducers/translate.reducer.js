import { TRANSLATOR } from "../action creators/constants";

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRANSLATOR: {
      console.log("payload.err", payload.err);
      if (payload.err) {
        return [...state];
      }
      return [[payload.text, payload.translate[0]], ...state];
    }
    default:
      return state;
  }
};
