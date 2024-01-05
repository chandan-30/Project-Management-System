import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            if (action.payload) {
                state.users = action.payload;
            }
        },
        addUser: (state, action) => {
            if (action.payload) {
                state.users.push(action.payload);
            }
        },
    }
});


export const { addUser, getUser } = userSlice.actions;
export default userSlice.reducer;