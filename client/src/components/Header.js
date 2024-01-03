import React from 'react';
import './css/header.css';
import { LuPlusCircle } from "react-icons/lu";
import TaskCard from './TaskCard';

const Header = () => {
  return (
    <div className='dashboard__header mt-[10%]'>
        <h2 className='text-xl font-bold p-1 border-b-2 border-green-400'> All Tasks </h2>
        <button className='dashboard__header__btn text-2xl font-semibold p-1' data-bs-toggle="modal" data-bs-target="#addTaskModal" onClick={(e)=>{
            e.preventDefault();
            e.stopPropagation();
        }}>
            <LuPlusCircle />
        </button>
        <div className='clear'></div>
        <TaskCard title={'Add Task Details'} save={true} disable={''} id={'addTaskModal'}/>
    </div>
  )
}

export default Header