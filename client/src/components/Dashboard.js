import React, { useState, useEffect } from 'react';
import './css/dashboard.css';
import Card from './Card';
import AddCard from './AddCard';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { addLoggedUser } from '../reducers/loggedUserSlice';

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskState = useSelector((state) => { 
    return state.task.tasks });

    const loggedUser = useSelector( state => {
      return state.loggedUser.loggedUser;
    });
    console.log(loggedUser);
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const checkTokenExpiry = () => {
      
      if (token) {
        
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decodedToken.exp < currentTime) {
          localStorage.setItem('token','');
          navigate('/login');
        } else {
          if (Object.keys(loggedUser).length === 0) {
            const user = JSON.parse( localStorage.getItem('pmsUser'));
            dispatch( addLoggedUser( user ));
          }
        }
      } else {
        navigate('/login');
      }
    };

    checkTokenExpiry();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },);

  return (
    <>
        <Header title={'All Tasks'} addbtn={true}/>
        <div className='grid-container'>
          {
            taskState && taskState.map((task,index) => {
              return (
                <Card key={task['_id']} task={task} />
              )
            })
          }
            {/* <Card /> */}
            
            <AddCard />
        </div>
    </>
  )
}

export default Dashboard