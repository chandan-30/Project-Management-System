import React from 'react';
import './css/dashboard.css';
import Card from './Card';
import AddCard from './AddCard';

const Dashboard = () => {
  return (
    <>
        <div className='grid-container'>
            <Card />
            
            <AddCard />
        </div>
    </>
  )
}

export default Dashboard