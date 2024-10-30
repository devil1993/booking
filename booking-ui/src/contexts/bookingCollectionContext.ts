import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bookings } from "../models/Bookings";
import { BookingItem } from "../models/BookingItem";

const initialState: Bookings = {
  month: 0,
  year: 0,
  bookingItems: [],
};

const bookingCollectionSlice = createSlice({
  name: "bookingCollection",
  initialState,
  reducers: {
    setBookingCollection: (state, action: PayloadAction<Bookings>) => {
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.bookingItems = action.payload.bookingItems;
      // console.log("setBookingCollection redux called");
    },
    clearBookingCollection: (state) => {
      state.year = 0;
      state.month = 0;
      state.bookingItems = [];
    },
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookingItems.push(action.payload);
    },
  },
});

export const bookingCollectionReducer = bookingCollectionSlice.reducer;
const bookingCollectionActions = bookingCollectionSlice.actions;
export default bookingCollectionActions;
