import { createSlice } from '@reduxjs/toolkit';
import CalendarUIModel from '../models/CalendarUIModel'; // Adjust the import path as necessary


const initialState = {
    bookingDay: null as CalendarUIModel | null,
};

const bookingEditSlice = createSlice({
  name: 'bookingEdit',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.bookingDay = action.payload;
    },
    clearBooking: (state) => {
      state.bookingDay = null;
    },
  },
});

export default {
    bookingEditReducer: bookingEditSlice.reducer,
    bookingEditActions: bookingEditSlice.actions
};