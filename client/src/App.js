import { Container } from "./containers";
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Users, Login } from './components';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./reducers/userSlice";
import { getTask } from "./reducers/taskSlice";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('/login');
    }
    //Get Users
    axios.get('http://localhost:8000/users').then( async res => {
      try {
        if (res.status !== 200 && res.statusText !== 'OK' ) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        dispatch(getUser(res.data));
      } catch (error) {
        console.error(error);
      }
    });

    //Get Tasks
    axios.get('http://localhost:8000/tasks').then( async res => {
      try {
        if (res.status !== 200 && res.statusText !== 'OK' ) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        dispatch(getTask(res.data));
      } catch (error) {
        console.error(error);
      }
    });
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
