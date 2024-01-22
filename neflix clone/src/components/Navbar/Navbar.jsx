import React from 'react'
import "./Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";


function Navbar() {
  return (
    <div className="navbar fixed flex justify-between align-middle pt-5 px-10">
      <div className="right-sec flex">
        <img className='logo' src="/Logonetflix.png" alt="Neflix logo" />
        <div className="nav-links ml-5">
          <a href='#' className='nav-items nav-active'>Home</a>
          <a href='#' className='nav-items'>TV Shows</a> 
          <a href='#' className='nav-items'>Movies</a>
          <a href='#' className='nav-items'>New & Popular</a>
          <a href='#' className='nav-items'>My List</a>
          <a href='#' className='nav-items'>Browse by Languages</a>
        </div>
      </div>
      <div className="left-sec flex">
        <IoSearchSharp size={23} className='mr-4'/>
        <MdOutlineNotificationsNone size={23} className='mr-4'/>
        <img className='avatar' src="/avatar.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar