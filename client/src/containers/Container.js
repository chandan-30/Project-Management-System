import React from 'react'
import './container.css';
import { Sidebar, SidebarToggle } from '../components';
import { Outlet } from 'react-router-dom';


const Container = () => {
  
  return (
    <>
        <div className="container-fluid text-center">
            <div className="row py-6 px-2 relative" >
                <SidebarToggle></SidebarToggle>
                <Sidebar></Sidebar>
                <div className="col dashboard">
                    
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}

export default Container