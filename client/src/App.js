import { Container } from "./containers";
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Users, Login } from './components';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./reducers/userSlice";
import { getTask } from "./reducers/taskSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { socket } from './utils';
import { getUsersRequest, getTasksRequest } from "./utils/apiRequests";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    // Listen for 'task_updated' event
    socket.on('task_updated', (data) => {
      console.log('A Task Updated :: Message via Socket');
      // Handle the task updated event
      getTasksRequest(axios, dispatch, getTask);
    });

    // Listen for 'task_created' event
    socket.on('task_created', (data) => {
      console.log('Task Created :: Message via Socket');
      // Handle the task created event
      getTasksRequest(axios, dispatch, getTask);
    });

    // Listen for 'task_deleted' event
    socket.on('task_deleted', (data) => {
      console.log('Task Deleted:: Message via Socket');
      // Handle the task deleted event
      getTasksRequest(axios, dispatch, getTask);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  useEffect( () => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/login');
    }
    //Get Users
    getUsersRequest(axios, dispatch, getUser);

    //Get Tasks
    getTasksRequest(axios, dispatch, getTask);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <>
      <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="login" element={<Login />} />
            
      </Routes>
    </>
  );
}

export default App;
