import React from 'react'
import './css/card.css';
import { data } from '../utils';
import AnimatedButton from './AnimatedButton';
import { RiFileEditFill, RiDeleteBin4Fill } from "react-icons/ri";
import TaskCard from './TaskCard';

const Card = () => {
    //console.log(data)
  return (
        <>
            
            <div className='card cursor-pointer' data-bs-toggle="modal" data-bs-target="#taskModal">
                <div className='card__title font-semibold text-md'>
                    { data.tickets[0].name }
                </div>
                <div className='card__desc mt-1 text-sm text-ellipsis'>
                    { data.tickets[0].desc }
                </div>
                <div className='card__footer'>
                    <p className='text-xs opacity-50'> { data.tickets[0].dueData } </p>
                    <div className={`float-left my-2 font-bold ${data.tickets[0].status}`}>
                        {data.tickets[0].status}
                    </div>
                    <div className='float-right pt-2 text-xl'>
                        <button className='mr-4' data-bs-toggle="modal" data-bs-target="#editTaskModal" onClick={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                        }}>
                            <RiFileEditFill className='text-2xl'/>
                        </button>
                        <AnimatedButton >
                            <RiDeleteBin4Fill className='text-2xl'/>
                        </AnimatedButton>
                    </div>
                </div>
            </div>

            <TaskCard title={'Task Details'} save={false} disable={'disabled'} id={'taskModal'}/>
            <TaskCard title={'Edit Task Details'} save={true} disable={''} id={'editTaskModal'}/>

        </>
  )
}

export default Card