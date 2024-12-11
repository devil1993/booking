import { configureStore } from "@reduxjs/toolkit";
import { bookingEditReducer } from "./bookingEditContext";
import { bookingOptionReducer } from "./bookingOptionsContext";
import { bookingCollectionReducer } from "./bookingCollectionContext";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import {authReducer} from "./authContext.ts";

const store = configureStore({
  reducer: {
    bookingEdit: bookingEditReducer,
    bookingOptions: bookingOptionReducer,
    bookingCollection: bookingCollectionReducer,
    auth: authReducer,
  },
});

export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

