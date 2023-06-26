import {createSlice} from "@reduxjs/toolkit";

const initialState = { "summary": 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || 0;
      if (count < 30) {
        state[payload] = count + 1;
        state.summary += 1;
      }
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) return;

      if (count === 1) {
        delete state[payload];
        state.summary -= 1;
        return;
      }

      state[payload] = count - 1;
      state.summary -= 1;
    },
    reset: (state, { payload }) => {
      state.summary -= state[payload];
      delete state[payload];
    }
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
