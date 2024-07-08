import React from 'react';
import "../src/stylesheets/SideBar.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const SideBar = (props) => {
  return (
    <div className='sidebar'>
      <div className='right-arrow' onClick={() => { props.onClose() }}><FaArrowLeftLong /></div>
      <div className='menus'>Profile</div>
      <div className='menus'>New Channel</div>
      <div className='menus'>New Group</div>
      <div className='menus'>Contacts</div>
      <div className='menus'>Calls</div>
      <div className='menus'>Saved Message</div>
      <div className='menus'>Setting</div>
    </div>
  );
}

export default SideBar;
