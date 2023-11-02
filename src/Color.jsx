import { BsFillCircleFill,BsFillCheckCircleFill } from "react-icons/bs";
import React, { useState } from 'react'

const Color = ({colors}) => {
    const [maincolor,setColor]=useState('');
  return (
    <div>
        <b>Colors:</b>
         {colors && colors.map((clr,index)=>{
          return <button style={{color:clr}} onClick={()=>setColor(clr)} className='clr'>{clr===maincolor?<BsFillCheckCircleFill  style={{fontSize:'14px'}}/>:<BsFillCircleFill style={{fontSize:'14px'}}/>}</button>
        })} 
    </div>
  )
}

export default Color