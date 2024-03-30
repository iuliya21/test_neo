import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type DetailsCard = {
  img: string;
  title: string;
  price: number;
  description: string;
};

const initialState: {details: DetailsCard | null} = {
  details: null,
};

export const infoCardSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    selectedCard: (state, action: PayloadAction<DetailsCard | null>) => {
      state.details = action.payload;
    },
    deleteDetails: (state) => {
      state.details = null;
    },
  },
});

export const { selectedCard, deleteDetails } = infoCardSlice.actions;
export default infoCardSlice.reducer;
