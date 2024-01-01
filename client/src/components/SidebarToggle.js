import React from 'react'
import { TiThMenu } from "react-icons/ti";

const SidebarToggle = () => {
    const handleClick = (e) => {
        const sideBarToggle = document.querySelectorAll('.container-fluid .sidebarToggle')[0];
        const sideBar = document.querySelectorAll('.container-fluid .sideBar')[0];
       // debugger;
        if (sideBarToggle) {
            sideBarToggle.style.display = 'none';
        }
        if (sideBar) {
            sideBar.style.display = 'block';
        }

        // if (sideBarToggle) {
        //     sideBarToggle.classList.add('hide');
        //     sideBarToggle.classList.remove('show');
        //   }
        
        // if (sideBar) {
        //     sideBar.classList.add('show');
        //     sideBar.classList.remove('hide');
        // }
    };

  return (
    <>
        <div className='sidebarToggle' onClick={handleClick}>
            <button>
                <TiThMenu />
            </button>
        </div>
    </>
  )
}

export default SidebarToggle