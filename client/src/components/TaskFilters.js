/* eslint-disable */
import React from 'react';
import './css/filters.css';
import { useState } from 'react';

const TaskFilters = ({getFilter}) => {

  const [text, setText] = useState('');

  const clickHandler = (e) => {
    let filter = e.currentTarget.textContent;

    if ( filter === 'My Tasks') {
      filter = 'AssignedTo';
    }
    if( filter === 'Clear Filters') {
      filter = 'Clear';
    }
    setText(filter);
    getFilter(filter);
  };
  return (
    <>
        <div className="dropdown filter-drp">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filters
            </button>
            <ul className="dropdown-menu">
            <li className='border-b-2 border-white'><a className="dropdown-item" href="#" onClick={clickHandler}>Clear Filters</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickHandler}>My Tasks</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickHandler}>High</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickHandler}>Low</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickHandler}>Complete</a></li>
                <li><a className="dropdown-item" href="#" onClick={clickHandler}>Incomplete</a></li>
                
            </ul>
        </div>
    </>
  )
}

export default TaskFilters;