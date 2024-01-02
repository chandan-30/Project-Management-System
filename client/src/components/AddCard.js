import React from 'react';
import './css/addcard.css';
import AnimatedButton from './AnimatedButton';
import { FaPlus } from 'react-icons/fa';

const AddCard = () => {
  return (
    <div className='card--add cursor-pointer'>
       <FaPlus /> Add New Task
    </div>
  )
}

export default AddCard