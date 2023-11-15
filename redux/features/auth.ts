import { createAction, createReducer } from "@reduxjs/toolkit";

// Action gestione token
export const setToken = createAction<string | null>("auth/setToken");

// Manage state token
const initialState = {
    token: null as string | null,
};

// Reducer for auth
const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(setToken, (state, action) => {
        state.token = action.payload;
    });
});

export default authReducer;