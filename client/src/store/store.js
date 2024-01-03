import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import taskReducer from '../reducers/taskSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});
