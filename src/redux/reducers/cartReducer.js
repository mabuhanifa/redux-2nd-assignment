import { DECREMENT, INCREMENT } from "../constants/cartConstants";

const initialState = {
  value: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, value, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};
