import { TRANSLATOR } from "../action creators/constants";

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRANSLATOR: {
      if (payload.err) {
        console.log("Error: ", payload.err);
        return [...state];
      }
      return [[payload.text, payload.translate[0]], ...state];
    }
    default:
      return state;
  }
};
