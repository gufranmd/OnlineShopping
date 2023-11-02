import React, { useContext } from 'react'
import NoteState from './NoteState'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import Contact from './Contact'
import {BsHddStackFill,BsHddStack,BsFillGridFill,BsGrid} from "react-icons/bs";
import GridView from './GridView'
import ListView from './ListView'
import Filter from './Filter'
import noteContext from './noteContext';
import Grid_ListBar from './Grid_ListBar'




const AllProduct = () => {

    const {grid,setGrid,filterout,}=useContext(noteContext);

    // const [grid,setGrid]=useState(true);
    // const [sort,setSort]=useState("sorting");
//     const updataSort=(e)=>{
//          setSort(e.target.value);
//         if(sort==="ascending"){
//             data=data.sort((a,b)=>b.price-a.price);
//         }
    
//         else if(sort==="descending"){
//             data=data.sort((a,b)=>a.price-b.price);
//     }

//     else if(sort==="desorting"){
//         data=data.sort((a,b)=>a.name.localeCompare(b.name));
//         console.log(data);
//     }

//     else {
//         data=data.sort((a,b)=>{
//         return b.name.localeCompare(a.name);
// });
// }


// }

  return (
    <NoteState>
    <Navbar/>
    <Sidebar/>
  
    <div className='allProduct-main'>
    <div className='filter'>
        <Filter/>
        </div>
    <div className='product-grid'>
      
    <h2 style={{textAlign:'center'}}>All Product</h2>
   <div className='underline'></div>

    <div className={grid && "allProduct-container"}>
        <Grid_ListBar/>
  
 </div>
 </div>
 </div>
    <Contact/>
    <Footer/>
    </NoteState>
  );
    
}


export default AllProduct