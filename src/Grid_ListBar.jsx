import React, { useCallback, useContext } from 'react'
import {BsHddStackFill,BsHddStack,BsFillGridFill,BsGrid} from "react-icons/bs";
import noteContext from './noteContext';
import { useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';
const Grid_ListBar = () => {
  
    const {filterout,grid,setGrid,updataSort,sort,setSort}=useContext(noteContext);
  return (<>
    <div className='filter-container'>
    <div className='grid-icon'>
        <button onClick={()=>setGrid(true)}>{!grid?<BsGrid/>: <BsFillGridFill/>}</button>
   <button onClick={()=>setGrid(false)}>{grid?<BsHddStack/>: <BsHddStackFill/>}</button>
   </div>
<h3>{filterout().length} items found here</h3>
<form>
    <select className='form-filter'  onChange={updataSort} >
        <option>sort by</option>
        <option  value="ascending">price low to high</option>
        <option value="descending">price high to low</option>
        <option value = "sorting">from A-Z</option>
        <option value="desorting">from Z-A</option>

    </select>
</form>
</div>
   <div className='grid-flex-container'>
   <section> 
       {grid?<GridView data={filterout}/>:<ListView data={filterout}/>}
</section>
</div>
</>
  )
}

export default Grid_ListBar