import React from 'react';
import './css/dashboard.css';
import Card from './Card';
import AddCard from './AddCard';
import { useSelector } from 'react-redux';
import Header from './Header';
const Dashboard = () => {

  const taskState = useSelector((state) => { 
    return state.task.tasks });
  

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