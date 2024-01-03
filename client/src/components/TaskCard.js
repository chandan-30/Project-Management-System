import React from 'react';
import './css/taskcard.css';
import { RiCloseCircleLine } from "react-icons/ri";
import InputElement from './InputElement';
const TaskCard = ({title, save, id, disable, task}) => {
    
    const Title = task?.Title ? task.Title : '';
    const Description = task?.Description ? task.Description : '';
    const AssignedTo = task?.AssignedTo ? task.AssignedTo : '';
    const Deadline = task?.Deadline ? task.Deadline : '';
    const Priority = task?.Priority ? task.Priority : '';
    const Status = task?.Status ? task.Status : '';
    
  return (
    <>
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content taskModal__content">
                    <div className="modal-header border-none">
                        <h4 className="text-xl font-bold " id="staticBackdropLabel">{title}</h4>
                        <button type="button" className='text-2xl' data-bs-dismiss="modal" aria-label="Close">
                            <RiCloseCircleLine />
                        </button>
                    </div>

                    <div className='modal-body taskModal__body'>
                        <InputElement val={Title} disable={disable} label={'Title'} type={'text'} />
                        <InputElement val={Description} disable={disable} label={'Description'} type={'textarea'} />
                        <InputElement val={AssignedTo} disable={disable} label={'Assigned To'} type={'text'} />
                        <InputElement val={Deadline} disable={disable} label={'End Date'} type={'date'} />
                        <InputElement val={Priority} disable={disable} label={'Priority'} type={'select'} />
                        <InputElement val={Status} disable={disable} label={'Status'} type={'select'} />
                    </div>
                    <div className="modal-footer border-none">
                        <button type="button" className="btn bg-gray-500 btn-secondary" data-bs-dismiss="modal">Close</button>
                        { save && (
                            <button type="button" className="btn bg-blue-500 btn-primary">Save Changes</button> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TaskCard