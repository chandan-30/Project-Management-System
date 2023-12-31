/* eslint-disable */

import React from 'react'
import './css/card.css';
import { RiFileEditFill, RiDeleteBin4Fill } from "react-icons/ri";
import TaskCard from './TaskCard';
import axios from 'axios';
import { removeTask } from '../reducers/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShowTask from './ShowTask';

const Card = ({task}) => {
    
    const dispatch = useDispatch();
    const loggedUser = useSelector( state => {
        return state.loggedUser.loggedUser;
    });
    const showEdit = ( loggedUser.role === 'admin' || loggedUser.name.toLowerCase() === task.AssignedTo.toLowerCase() );
    
    let desc = task.Description;
    if (desc.length > 60) {
        desc = desc.slice(0, 60) + '...';
    }

    const deleteHandler = (e) => {
        
        e.preventDefault();
        e.stopPropagation();
        if ( loggedUser.role !== 'admin' ) {
            alert('You are not allowed to delete the tasks');
            return;
        }
        
        const taskId = e.currentTarget.getAttribute('data-task-id');
        if (taskId) {
            //Make a PUT request to update the task
            axios.delete(`http://localhost:8000/tasks/${taskId}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              })
                .then(res => {
                    if (res.status !== 200 && res.statusText !== 'OK' ) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const deletedTask = res.data;
                    dispatch(removeTask(deletedTask));
                    })
                .catch(error => {
                    console.error('Error updating task:', error);
            });
        }
    }

  return (
        <>
            <div className='position-relative'>
                <div className='card cursor-pointer position-relative' data-bs-toggle="modal" data-bs-target={`#task-${task._id}`}>
                    <div className={`card__title font-semibold text-md ${task.Priority}`} >
                        { task.Title }
                    </div>
                    <div className='card__desc mt-1 text-sm text-ellipsis'>
                        { desc }
                    </div>
                    <div className='card__title font-semibold text-md'>
                        { task.AssignedTo }
                    </div>
                    <div className='card__footer'>
                        <p className='text-xs opacity-50'> Deadline :: { task.Deadline } </p>
                        <div className={`float-left my-2 font-bold ${task.Status}`}>
                            {task.Status}
                        </div>
                        { true && (<div className='float-right pt-2 text-xl'>
                            <button className='edit-btn' data-task-id={task._id} data-bs-toggle="modal" data-bs-target={`#editTask-${task._id}`} onClick={(e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                            }}>
                                <RiFileEditFill className='text-2xl'/>
                            </button>
                        </div>)}
                    </div>
                </div>
                <button type='button' id={'delete'} data-task-id={task._id} className='z-10' onClick={(e) => deleteHandler(e)} >
                    <RiDeleteBin4Fill className='text-2xl'/>
                </button>
            </div>
            
            <ShowTask id={`task-${task._id}`} taskId={task._id} task={task} />
            <TaskCard task={task} isedit={true} title={'Edit Task Details'} save={true} disable={''} id={`editTask-${task._id}`} showEdit={showEdit} />
            

        </>
  )
}

export default Card