import React from 'react'
import './css/card.css';
import { RiFileEditFill, RiDeleteBin4Fill } from "react-icons/ri";
import TaskCard from './TaskCard';
import axios from 'axios';
import { removeTask } from '../reducers/taskSlice';
import { useDispatch } from 'react-redux';

const Card = ({task}) => {
    
    const dispatch = useDispatch();

    let desc = task.Description;
    if (desc.length > 60) {
        desc = desc.slice(0, 60) + '...';
    }

    const deleteHandler = (e) => {
        
        e.preventDefault();
        e.stopPropagation();
        const taskId = e.currentTarget.getAttribute('data-task-id');
        if (taskId) {
            //Make a PUT request to update the task
            axios.delete(`http://localhost:8000/tasks/${taskId}`)
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
                    <div className='card__title font-semibold text-md'>
                        { task.Title }
                    </div>
                    <div className='card__desc mt-1 text-sm text-ellipsis'>
                        { desc }
                    </div>
                    <div className='card__footer'>
                        <p className='text-xs opacity-50'> { task.Deadline } </p>
                        <div className={`float-left my-2 font-bold ${task.Status}`}>
                            {task.Status}
                        </div>
                        <div className='float-right pt-2 text-xl'>
                            <button className='mr-10' data-task-id={task._id} data-bs-toggle="modal" data-bs-target={`#editTask-${task._id}`} onClick={(e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                            }}>
                                <RiFileEditFill className='text-2xl'/>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <button type='button' id={'delete'} data-task-id={task._id} className='z-10' onClick={(e) => deleteHandler(e)} >
                    <RiDeleteBin4Fill className='text-2xl'/>
                </button>
            </div>

            <TaskCard task={task} title={'Task Details'} save={false} disable={'disabled'} id={`task-${task._id}`}/>
            <TaskCard task={task} title={'Edit Task Details'} save={true} disable={''} id={`editTask-${task._id}`}/>
            

        </>
  )
}

export default Card