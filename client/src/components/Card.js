import React from 'react'
import './css/card.css';
import { RiFileEditFill, RiDeleteBin4Fill } from "react-icons/ri";
import TaskCard from './TaskCard';


const Card = ({task}) => {
    let desc = task.Description;
    if (desc.length > 60) {
        desc = desc.slice(0, 60) + '...';
      }
  return (
        <>
            
            <div className='card cursor-pointer' data-bs-toggle="modal" data-bs-target="#taskModal">
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
                        <button className='mr-4' data-bs-toggle="modal" data-bs-target="#editTaskModal" onClick={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                        }}>
                            <RiFileEditFill className='text-2xl'/>
                        </button>
                        {}<button>
                            <RiDeleteBin4Fill className='text-2xl'/>
                        </button>
                    </div>
                </div>
            </div>

            <TaskCard task={task} title={'Task Details'} save={false} disable={'disabled'} id={'taskModal'}/>
            <TaskCard task={task} title={'Edit Task Details'} save={true} disable={''} id={'editTaskModal'}/>

        </>
  )
}

export default Card