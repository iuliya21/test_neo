import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BuyItem = {
  img: string;
  title: string;
  price: number;
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
      state.buys.push(action.payload);
    },
  },
});

export const { addItem } = buysSlice.actions;
export default buysSlice.reducer;
