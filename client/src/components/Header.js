import React from 'react';
import './css/header.css';
import { LuPlusCircle } from "react-icons/lu";
import AnimatedButton from './AnimatedButton';

const Header = () => {
  return (
    <div className='dashboard__header mt-[10%]'>
        <h2 className='text-xl font-bold p-1 border-b-2 border-green-400'> Projects </h2>
        <AnimatedButton className='dashboard__header__btn text-2xl font-semibold p-1'>
            <LuPlusCircle />
        </AnimatedButton>
        {/* <motion.button whileTap={buttonClick} >
            
        </motion.button> */}
        <div className='clear'></div>
    </div>
  )
}

export default Header