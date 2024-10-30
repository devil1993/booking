import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CalendarUIModel from "../models/CalendarUIModel"; // Adjust the import path as necessary

const initialState = {
  bookingDay: null as CalendarUIModel | null,
};

const bookingEditSlice = createSlice({
  name: "bookingEdit",
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<CalendarUIModel>) => {
      state.bookingDay = action.payload;
    },
    clearBooking: (state) => {
      state.bookingDay = null;
    },
  },  
});

export const bookingEditReducer = bookingEditSlice.reducer;
const bookingEditActions = bookingEditSlice.actions;
export default bookingEditActions;
