import React,{ useEffect, useState } from 'react';
import './css/taskcard.css';
import { RiCloseCircleLine } from "react-icons/ri";
import InputElement from './InputElement';
import axios from 'axios';
import { addTask, editTask } from '../reducers/taskSlice';
import { useDispatch } from 'react-redux';

const TaskCard = ({title, save, id, disable, task}) => {

    const dispatch = useDispatch();

    const taskDetails = {
        Title: task?.Title || '',
        Description: task?.Description || '',
        AssignedTo: task?.AssignedTo || '',
        Deadline: task?.Deadline || '',
        Priority: task?.Priority || 'High',
        Status: task?.Status || 'Incomplete',
      };

    const [form, setForm] = useState(taskDetails);
    const [access, setAccess] = useState(true);

    const saveHandler = (e) => {
        // Retrieve the data-task-id attribute
         const taskId = e.currentTarget.getAttribute('data-task-id');
         if(taskId) {
            // Make a PUT request to update the task
            axios.put(`http://localhost:8000/tasks/${taskId}`, form)
                .then(res => {
                    if (res.status !== 200 && res.statusText !== 'OK' ) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const updatedTask = res.data;
                    dispatch(editTask(updatedTask));
                    console.log('Task updated:', updatedTask);
                    // Handle success or update the state as needed
                    })
                .catch(error => {
                    console.error('Error updating task:', error);
                });
         } else {
            axios.post(`http://localhost:8000/tasks/${taskId}`, form)
                .then(res => {
                    if (res.status !== 201 && res.statusText !== 'OK' ) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const updatedTask = res.data;
                    dispatch(addTask(updatedTask));
                    console.log('Task updated:', updatedTask);
                    // Handle success or update the state as needed
                    })
                .catch(error => {
                    console.error('Error updating task:', error);
                });
            
         }
    }

    useEffect( () => {
        const hasEmptyValue = Object.values(form).some(value => value === '');
        if (hasEmptyValue) {
            setAccess(false);
        } else {
            setAccess(true);
        }
    },[form]);
    
  return (
    <>
        <div className="modal fade modal-parent" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content taskModal__content">
                    <div className="modal-header border-none">
                        <h4 className="text-xl font-bold " id="staticBackdropLabel">{title}</h4>
                        <button type="button" className='text-2xl' data-bs-dismiss="modal" aria-label="Close">
                            <RiCloseCircleLine />
                        </button>
                    </div>

                    <div className='modal-body taskModal__body'>
                        <InputElement val={taskDetails.Title} taskDetails={{form, setForm}} disable={disable} label={'Title'} type={'text'} />
                        <InputElement val={taskDetails.Description} taskDetails={{form, setForm}} disable={disable} label={'Description'} type={'textarea'} />
                        <InputElement val={taskDetails.AssignedTo} taskDetails={{form, setForm}} disable={disable} label={'AssignedTo'} type={'text'} />
                        <InputElement val={taskDetails.Deadline} taskDetails={{form, setForm}} disable={disable} label={'Deadline'} type={'date'} />
                        <InputElement val={taskDetails.Priority} taskDetails={{form, setForm}} disable={disable} label={'Priority'} type={'select'} />
                        <InputElement val={taskDetails.Status} taskDetails={{form, setForm}} disable={disable} label={'Status'} type={'select'} />
                    </div>
                    { save && (
                        <p className='text-sm opacity-40'>
                            Please fill out all fields with * mark
                        </p>
                    )}
                    <div className="modal-footer border-none">
                        
                        <br />
                        <button type="button" className="btn bg-gray-500 btn-secondary" data-bs-dismiss="modal">Close</button>
                        { save && access && (
                            <button type="button" className="btn bg-blue-500 btn-primary" data-task-id={task?._id || ''} onClick={saveHandler}>Save Changes</button> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCard