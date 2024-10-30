import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingOptions } from "../models/BookingOptions";

const initialState = {
  options: [] as BookingOptions[],
};

const bookingOptionsSlice = createSlice({
  name: "bookingOptions",
  initialState,
  reducers: {
    setBookingOptions: (state, action: PayloadAction<BookingOptions[]>) => {
      state.options = action.payload;
    },
    clearBookingOptions: (state) => {
      state.options = [];
    },
  },
});

export const bookingOptionReducer = bookingOptionsSlice.reducer;
const bookingOptionActions = bookingOptionsSlice.actions;
export default bookingOptionActions;