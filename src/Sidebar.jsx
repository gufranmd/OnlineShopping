import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCartPlus ,FaUserAlt,FaUserMinus,FaUserPlus} from "react-icons/fa"
import noteContext from './noteContext'


const Sidebar = () => {
   
  const {sidebaropen,setsidebar,loginWithRedirect,logout,User}=useContext(noteContext);

  return (
    <div className={`${sidebaropen?'sidebar show-sidebar':'sidebar'}`}>
        <div className='sidebar-header'>
        <img src="https://th.bing.com/th/id/OIP.kfgxf6J_wufF6yuOqmZgngHaHb?pid=ImgDet&rs=1" width={80}></img>
        <button className='cross-btn' onClick={()=> setsidebar(!sidebaropen)}><FaTimes/> </button>
      <ul className="sidebar-nav-links">
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/About'>About</a>
      </li>
      <li>
        <a  href='/allProducts'>Product</a>
      </li>
    </ul> 
    <div className='cart-container'>
       
    <a href='/cart'>
    <button className='cart-icon'> Cart  <FaCartPlus/></button>
    </a>
    {!User? <button  className='cart-icon' onClick={loginWithRedirect}> Login<span ><FaUserPlus/></span></button>:<button className='cart-icon' onClick={()=>logout(window.location.origin)}>Logout<span><FaUserMinus/></span> </button>}

    {/* <button className='cart-icon'> Login<FaUserAlt/></button> */}
    </div>
        </div>
    </div>
  )
}

export default Sidebar

