import React from 'react';
import './css/addcard.css';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const AddCard = () => {
  const taskStatelen = useSelector( (state) => {
    return state.task.tasks.length;
  });
  return (
    <div className='card--add cursor-pointer' data-bs-toggle="modal" data-bs-target={`#addTask-${taskStatelen}`} onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
  }}>
       <FaPlus /> Add New Task
    </div>
  )
}

export default AddCard