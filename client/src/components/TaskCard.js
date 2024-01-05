import React,{ useEffect, useState } from 'react';
import './css/taskcard.css';
import { RiCloseCircleLine } from "react-icons/ri";
import InputElement from './InputElement';
import axios from 'axios';
import { addTask, editTask } from '../reducers/taskSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { autoComplete } from '../utils';

const TaskCard = ({title, save, id, disable, task, showEdit}) => {



    const users = useSelector((state) => state.user.users);
    const userNames = users.map((user) => {
        return user.name;
    });
    let _id = '';
    if (save && task.Title) {
        _id = `${task.Title}autofinsh`;
    }
    if( save && !task) {
        _id = `autofinsh`;
    }
    const inp = document.getElementById(_id);
    
    if ( _id !== '' && inp !== null) {
        console.log('am', inp)
        autoComplete(inp, userNames);
    }


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
    // eslint-disable-next-line no-unused-vars
    const [access, setAccess] = useState(true);
    

    const saveHandler = (e) => {
        // Retrieve the data-task-id attribute
         const taskId = e.currentTarget.getAttribute('data-task-id');
         if(taskId) {
            // Make a PUT request to update the task
            axios.put(`http://localhost:8000/tasks/${taskId}`, form, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              })
                .then(res => {
                    if (res.status !== 200 && res.statusText !== 'OK' ) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const updatedTask = res.data;
                    dispatch(editTask(updatedTask));
                    
                    alert('Task has been updated successfully!');
                    })
                .catch(error => {
                    console.error('Error updating task:', error);
            });
         } else {
            // Make a POST request to add new task
            axios.post(`http://localhost:8000/tasks/${taskId}`, form, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              })
                .then(res => {
                    if (res.status !== 201 && res.statusText !== 'OK' ) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    const updatedTask = res.data;
                    dispatch(addTask(updatedTask));
                    
                    alert('New Task has been created successfully!');
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
                        <InputElement val={form.Title} taskDetails={{form, setForm}} disable={disable} label={'Title'} type={'text'} />
                        <InputElement val={form.Description} taskDetails={{form, setForm}} disable={disable} label={'Description'} type={'textarea'} />
                        <InputElement val={form.AssignedTo} taskDetails={{form, setForm}} disable={disable} label={'AssignedTo'} type={'text'} id={_id} placeH={'Auto suggestive field type something'} />
                        <InputElement val={form.Deadline} taskDetails={{form, setForm}} disable={disable} label={'Deadline'} type={'date'} />
                        <InputElement val={form.Priority} taskDetails={{form, setForm}} disable={disable} label={'Priority'} type={'select'} />
                        <InputElement val={form.Status} taskDetails={{form, setForm}} disable={disable} label={'Status'} type={'select'} />
                    </div>
                    { save && (
                        <p className='text-sm opacity-40'>
                            Please fill out all fields with * mark
                        </p>
                    )}

                    {  !(showEdit? showEdit : true) && (
                        <p className='text-sm opacity-40 text-red-400 font-semibold'>
                            You are not allowed to edit this task !
                        </p>
                    )
                    }
                    <div className="modal-footer border-none">
                        
                        <br />
                        <button type="button" className="btn bg-gray-500 btn-secondary" data-bs-dismiss="modal">Close</button>
                        { save && ( showEdit ? showEdit : true)  && (
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