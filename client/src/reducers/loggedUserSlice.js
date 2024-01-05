import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedUser: {},
};

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        addLoggedUser: (state, action) => {
            if (action.payload) {
                state.loggedUser = { ...action.payload } ;
            }
        },
        removeLoggedUser: (state, action) => {
            if (action.payload) {
                state.loggedUser = {} ;
            }
        },
    }
});

export const { addLoggedUser, removeLoggedUser } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;