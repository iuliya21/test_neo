import { configureStore } from '@reduxjs/toolkit';
import buysReducer from './buysSlice';
import detailsReducer from './infoCardSlice';

export const store = configureStore({
  reducer: {
    items: buysReducer,
    details: detailsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;