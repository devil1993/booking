import { createSlice } from "@reduxjs/toolkit";
import { BookingOptions } from "../models/BookingOptions";

const initialState = {
  options: [] as BookingOptions[],
};

const bookingOptionsSlice = createSlice({
  name: "bookingOptions",
  initialState,
  reducers: {
    setBookingOptions: (state, action) => {
      state.options = action.payload;
    },
    clearBookingOptions: (state) => {
      state.options = [];
    },
  },
});

export default {
  bookingOptionReducer: bookingOptionsSlice.reducer,
  bookingOptionActions: bookingOptionsSlice.actions,
};
