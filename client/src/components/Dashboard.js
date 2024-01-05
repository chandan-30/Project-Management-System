/* eslint-disable */

import React, { useState, useEffect } from 'react';
import './css/dashboard.css';
import Card from './Card';
import AddCard from './AddCard';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { addLoggedUser } from '../reducers/loggedUserSlice';
import TaskFilters from './TaskFilters';

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskState = useSelector((state) => { 
    return state.task.tasks });
  

  const loggedUser = useSelector( state => {
    return state.loggedUser.loggedUser;
  });
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [data, setData] = useState(taskState);

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

  useEffect(() => { setData(taskState); },[taskState]);

  const getFilter = (filter) => {
    let filteredTasks = [...taskState];
    
    if( filter === 'AssignedTo') {
      filteredTasks = taskState.filter((task) => {
        return task.AssignedTo === loggedUser.name;
      });
    }

    if( filter === 'High') {
      filteredTasks = taskState.filter((task) => {
        return task.Priority === 'High';
      });
    }

    if( filter === 'Low') {
      filteredTasks = taskState.filter((task) => {
        return task.Priority === 'Low';
      });
    }

    if( filter === 'Complete') { 
      filteredTasks = taskState.filter((task) => {
        return task.Status === 'Complete';
      });
    }

    if( filter === 'InComplete') { 
      filteredTasks = taskState.filter((task) => {
        return task.Status === 'InComplete';
      });
    }

    setData(filteredTasks);
    
  }

  return (
    <>
        <Header title={'All Tasks'} addbtn={true}/>
        <TaskFilters getFilter={getFilter} />
        <div className='grid-container'>

        {
          data && data.map((task,index) => {
              return (
                <Card key={task['_id']} task={task} />
              )
          })
        }
        <AddCard />
        </div>
    </>
  )
}

export default Dashboard