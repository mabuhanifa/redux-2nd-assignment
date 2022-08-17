import { DECREMENT, INCREMENT } from "../constants/cartConstants";

const initialState = {
  asus: {
    qty: 0,
    price: 35500,
  },
  dell: {
    qty: 0,
    price: 9300,
  },
  canon: {
    qty: 0,
    price: 36500,
  },
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case INCREMENT:
      var id = payload.id || "";
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          qty: state[id].qty + 1,
        },
      };
      return newState;
    case DECREMENT:
      var id = payload.id || "";
      const newUpdatedState = {
        ...state,
        [id]: {
          ...state[id],
          qty: state[id].qty - 1,
        },
      };
      return newUpdatedState;
    case "error":
      var id = payload.id || "";
      const errorState = {
        ...state,
        [id]: {
          ...state[id],
          qty: state[id].qty + payload.value,
        },
      };
      return errorState;
    default:
      return state;
  }
};

export default cartReducer;
