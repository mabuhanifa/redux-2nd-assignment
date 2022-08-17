import { applyMiddleware, createStore } from "redux";
import logger from "../middleware/logger";
import cartReducer from "../reducers/cartReducer";

const store = createStore(cartReducer, applyMiddleware(logger));

export default store;
