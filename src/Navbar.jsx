import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import { FaCartPlus ,FaUserAlt,FaUserMinus,FaUserPlus} from "react-icons/fa"
import noteContext from './noteContext';
import { useContext } from 'react';
const Navbar = () => {
  const {sidebaropen,setsidebar,loginWithRedirect,logout,User}=useContext(noteContext);
  return (
    <div className="nav-center">
    <div className="nav-header">
  
      <img src="https://th.bing.com/th/id/OIP.kfgxf6J_wufF6yuOqmZgngHaHb?pid=ImgDet&rs=1" width={80}></img>
      <ul className="nav-links">
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/About'>About</a>
      </li>
      <li>
        <a href='/allProducts'>Product</a>
      </li>
      {User &&
      <li>
        <a href='/checkout'>Checkout</a>
      </li>}
    </ul>
  <div>

<div className='cartAndLoginbtn'><a href='/cart'>
  <button className='btn cart-icon full-nav'> Cart  <FaCartPlus/> </button></a>
  {!User? <button style={{backgroundColor:'green'}} className='btn cart-icon full-nav'onClick={loginWithRedirect}> Login<span style={{marginLeft:'0.6rem'}}><FaUserPlus/></span></button>:<button style={{backgroundColor:'brown'}} className='btn cart-icon full-nav'onClick={()=>logout(window.location.origin)}>Logout<span style={{marginLeft:'0.6rem'}}><FaUserMinus/></span> </button>}
</div>
   <button className='cart-icon short-nav' onClick={()=>setsidebar(!sidebaropen)}> <FaBars/></button>

    
    
    </div>
     </div>
   
  </div>
  )
}

export default Navbar