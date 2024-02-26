import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
