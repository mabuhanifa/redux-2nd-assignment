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
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      var id = payload.id || "";
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          qty: state[id].qty + 1,
        },
        //cart: [...state.cart, id],
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
        //cart: state.cart.splice(state.cart - 1, 1),
      };
      return newUpdatedState;

    default:
      return state;
  }
};

export default cartReducer;
