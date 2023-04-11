import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import profileImage from '../assets/images/ByeWind.png'
import {FaAngleDown} from 'react-icons/fa';
import {FcFolder, FcReadingEbook} from 'react-icons/fc'
import {AiOutlineCheck} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import './sidebar.css';
const Sidebar = () => {
    const [ListShowHide, setListShowHide]= useState(false);
    const [ListTShowHide, setListTShowHide]= useState(false);
    const hideShow=()=>{
        setListShowHide(!ListShowHide);
    }

    const hideShowTwo=()=>{
        setListTShowHide(!ListTShowHide);
    }

  return (
    <div className='Sidebar_Wrapper'>
    
        <div className='profile_Info'>
            <span className='profile_img'>
                <img src={profileImage} alt='img' className='img-fluid'/>
            </span>
            <span className='profile_member'>Hi, Gabriele</span>
        </div>

        <ul className=' menu menu_1 mt-4 mb-0 ps-0'>
            <li><NavLink to='/' className='nav-link' >Overview </NavLink> </li>
            <li><NavLink to='/' className='nav-link' >Calendar </NavLink> </li>
        </ul>

        <h5 className='mt-4 menu_heading'>Workspace</h5>
        <ul className=' menu menu_2 mt-4 mb-0 ps-0'>
            <li>
            
                <NavLink to='' className='nav-link' onClick={()=>hideShow()} ><FcFolder/> Notes  <span className='menu_icon'>{<FaAngleDown/>}</span></NavLink> 
                {
                ListShowHide &&
                <ul className='sub_menu menu ps-3'>
                    <li> <NavLink to='' className='nav-link' >Notes 1 </NavLink> </li>
                    <li> <NavLink to='' className='nav-link' >Notes 2</NavLink> </li>
                    <li> <NavLink to='' className='nav-link' >Notes 3 </NavLink> </li>
                </ul>
                }
            </li>
            <li>
                <NavLink to='' className='nav-link' onClick={()=>hideShowTwo()} ><FcReadingEbook/> Contacts  <span className='menu_icon'>{<FaAngleDown/>}</span></NavLink> 
                {
                
                    ListTShowHide &&
                <ul className='sub_menu menu ps-3'>
                    <li> <NavLink to='' className='nav-link' >Notes</NavLink> </li>
                    
                </ul>

                }
            </li>
            <li><NavLink to='' className='nav-link' ><AiOutlineCheck /> Tasks </NavLink> </li>
        </ul>

        <div className="logout_button mt-5">
            <NavLink to={'/'} className="/" >
            <button className=" btn btn-success btn-sm mt-3">
               Logout <BiLogOutCircle className='logout_icon_style' />
            </button>
            </NavLink>
        </div>

      

    
    </div>
  )
}

export default Sidebar