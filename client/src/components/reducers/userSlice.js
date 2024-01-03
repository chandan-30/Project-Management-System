import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            name: 'Sai Chandan Yata',
            email: 'sai.chandan.030@gmail.com',
            profilepic: 
        },
    ],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            if (action.payload) {
                state.users.push(action.payload);
            }
        },
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;