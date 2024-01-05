import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import taskReducer from '../reducers/taskSlice';
import loggedUserReducer from '../reducers/loggedUserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    loggedUser: loggedUserReducer
  },
});
