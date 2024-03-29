import { configureStore } from '@reduxjs/toolkit';
import buysReducer from './buysSlice';

export const store = configureStore({
  reducer: {
    items: buysReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;