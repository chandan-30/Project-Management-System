import { Container } from "./containers";
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Tickets } from './components';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./reducers/userSlice";
import { getTask } from "./reducers/taskSlice";
import axios from "axios";

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
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
  });
  return (
    <>
      <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Dashboard />} />
              <Route path="tickets" element={<Tickets />} />
            </Route>
      </Routes>
    </>
  );
}

export default App;
