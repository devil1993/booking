import { configureStore } from "@reduxjs/toolkit";
import bookingEditInfo from "./bookingEditContext";
import bookingOptionsInfo from "./bookingOptionsContext";
import bookingCollectionInfo from "./bookingCollectionContext";

const store = configureStore({
    reducer: {
        bookingEdit: bookingEditInfo.bookingEditReducer,
        bookingOptions: bookingOptionsInfo.bookingOptionReducer,
        bookingCollection: bookingCollectionInfo.bookingCollectionReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;