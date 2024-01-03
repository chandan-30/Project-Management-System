import React from 'react';
import './css/addcard.css';
import { FaPlus } from 'react-icons/fa';

const AddCard = () => {
  return (
    <div className='card--add cursor-pointer' data-bs-toggle="modal" data-bs-target="#addTaskModal" onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
  }}>
       <FaPlus /> Add New Task
    </div>
  )
}

export default AddCard