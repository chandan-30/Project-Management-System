import React, { useRef } from 'react'
import './css/sidebar.css';
import { FaArrowLeft } from "react-icons/fa";
import {getRandomAvatar} from '../utils';
import {img1, img2, img3, img4} from '../assets/avatars';
import { useCallback } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { GrLogout } from "react-icons/gr";
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton'

const Sidebar = () => {
    const image = useRef(getRandomAvatar([img1, img2, img3, img4 ]));
    useCallback(
      () => {
        image.current = getRandomAvatar([img1, img2, img3, img4 ]);
      },
      [],
    )
    
    const sideBarCloseClick = (e) => {
        const sideBarToggle = document.querySelectorAll('.container-fluid .sidebarToggle')[0];
        const sideBar = document.querySelectorAll('.container-fluid .sideBar')[0];

        if (sideBarToggle) {
            sideBarToggle.style.display = 'block';
        }
        if (sideBar) {
            sideBar.style.display = 'none';
        }        
    };

  return (
    <>
        <div className="col-4 sideBar" >

            <div className='img-container p-2'>
                <img src={image.current} alt={'avatar'} height={80} width={80}/>
            </div>
            <h2 className='text-3xl font-bold profileName'> Sai Chandan Yata </h2>

            <ul className='list'>
                <li> 
                    <MdSpaceDashboard />
                    <AnimatedButton>
                        <Link to="/" >  Dashboard </Link> 
                    </AnimatedButton>
                </li>
                <li> 
                    <LuUsers />
                    <AnimatedButton>
                        All Users
                    </AnimatedButton>
                </li>
                <li> 
                    <GrLogout />
                    <AnimatedButton>
                    <Link to="/login" > Logout </Link>
                    </AnimatedButton>
                </li>
            </ul>

            <span className=' absolute sideBar__close left-[90%] z-2 top-1' onClick={sideBarCloseClick}>
                <FaArrowLeft />
            </span>
        </div>

    </>
  )
}

export default Sidebar