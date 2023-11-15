import { createAction, createReducer } from "@reduxjs/toolkit";

// Action gestione list contact
export const setListContact = createAction<string[]>("listcontact/setListContact");

// Manage state list contact
const initialState = {
    listContact: [] as string[],
};

// Reducer for list contact
const listContactReducer = createReducer(initialState, (builder) => {
    builder.addCase(setListContact, (state, action) => {
        state.listContact = action.payload;
    });
});

export default listContactReducer;