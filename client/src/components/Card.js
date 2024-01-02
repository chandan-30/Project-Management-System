import React from 'react'
import './css/card.css';
import { data } from '../utils';
import AnimatedButton from './AnimatedButton';
import { RiFileEditFill, RiDeleteBin4Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const Card = () => {
    //console.log(data)
  return (
    <div className='card'>
        <div className='card__title font-semibold text-md'>
            { data.tickets[0].name }
        </div>
        <div className='card__desc mt-1 text-sm text-ellipsis'>
            { data.tickets[0].desc }
        </div>
        <div className='card__footer'>
            <p className='text-xs opacity-50'> { data.tickets[0].dueData } </p>
            <div className='float-left'>
                <AnimatedButton className={`py-1 px-3 mt-1 text-sm rounded-full ${data.tickets[0].status} pointer-events-none` } >
                    Completed
                </AnimatedButton>
            </div>
            <div className='float-right pt-2 text-xl'>
                <AnimatedButton className={`mr-4`} >
                    <RiFileEditFill />
                </AnimatedButton>
                <AnimatedButton >
                    <RiDeleteBin4Fill />
                </AnimatedButton>
            </div>
        </div>
    </div>
  )
}

export default Card