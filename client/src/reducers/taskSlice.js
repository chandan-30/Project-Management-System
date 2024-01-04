import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        getTask: (state, action) => {
            if (action.payload) {
                state.tasks = action.payload;
            }
        },

        addTask: (state, action) => {
            if (action.payload) {
                state.tasks.push(action.payload);
            }
        },
        editTask: (state, action) => {
            if (action.payload) {
                state.tasks.forEach( (task, index) => {
                    if (task._id === action.payload._id) {
                        state.tasks[index] = action.payload;
                    }
                });
            }
        },
        removeTask: (state, action) => {
            if (action.payload) {
                state.tasks.forEach( (task, index) => {
                
                    console.log(task, action.payload)
                    if (task._id === action.payload._id) {
                        state.tasks.splice(index, 1);
                    }
                });
            }
        },
    },
});

export const { getTask, addTask, editTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;