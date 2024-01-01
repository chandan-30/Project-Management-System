import React, { } from 'react'
import './container.css';
import { Dashboard, Sidebar, SidebarToggle } from '../components';

const Container = () => {

  return (
    <>
        <div className="container-fluid text-center">
            <div className="row py-6 px-2 relative" >
                <SidebarToggle></SidebarToggle>
                <Sidebar></Sidebar>
                <Dashboard></Dashboard>
            </div>
        </div>
    </>
  )
}

export default Container