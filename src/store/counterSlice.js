import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 1 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.counter += 1;
      if (state.counter > 30) {
        state.counter = 1;
      }
    },
    decrease: (state) => {
      state.counter -= 1;
      if (state.counter === 0) {
        state.counter = 30;
      }
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
