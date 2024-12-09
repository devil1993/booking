import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ISignInResult from "../models/ISignInResult.ts";

const initialState: ISignInResult = {} as ISignInResult;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedInUser: (state, action: PayloadAction<ISignInResult>) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.photoUrl = action.payload.photoUrl
        },
        clearLoggedInUser: (state) => {
            state = {} as ISignInResult;
        }
    }
});

export const authReducer = authSlice.reducer;
const authActions = authSlice.actions;
export default authActions;