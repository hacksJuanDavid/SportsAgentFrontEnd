import { createAction, createReducer } from "@reduxjs/toolkit";

// Action gestione list user
export const setListUser = createAction<string[]>("listuser/setListUser");

// Manage state list user
const initialState = {
    listUser: [] as string[],
};

// Reducer for list user
const listUserReducer = createReducer(initialState, (builder) => {
    builder.addCase(setListUser, (state, action) => {
        state.listUser = action.payload;
    });
});

export default listUserReducer;