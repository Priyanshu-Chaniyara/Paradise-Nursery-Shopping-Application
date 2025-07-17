import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.js";
import cartReducer from "./cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
