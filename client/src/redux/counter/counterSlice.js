import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      state.error = null; // Clear error when incrementing
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        state.error = null; // Clear error when successfully decrementing
      } else {
        state.error = "Cannot go below 0!";
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.error = null; // Clear error when incrementing by amount
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
