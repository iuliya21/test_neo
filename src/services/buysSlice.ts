import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BuyItem = {
  img: string;
  title: string;
  price: number;
  id: string;
  count: number;
};

type BuysState = {
  buys: BuyItem[];
};

const initialState: BuysState | null = {
  buys: [],
};

const buysSlice = createSlice({
  name: "buys",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BuyItem>) => {
      const existingItem = state.buys.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.buys.push(action.payload);
      }
    },
    removeItems: (state, action: PayloadAction<string>) => {
      state.buys = state.buys.filter((el) => el.id !== action.payload);
    },
    increment: (state, action: PayloadAction<string>) => {
      state.buys = state.buys.map(el => 
        el.id === action.payload ? { ...el, count: el.count + 1 } : el
      );
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.buys = state.buys.map(el => 
        el.id === action.payload ? { ...el, count: el.count - 1 } : el
      );
    },
  },
});

export const { addItem, removeItems, increment, decrement } = buysSlice.actions;
export default buysSlice.reducer;
