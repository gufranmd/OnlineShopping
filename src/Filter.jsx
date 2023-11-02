import React, { useState,useEffect, useContext} from 'react'
import Color from './Color';
import noteContext from './noteContext';


const Filter = () => {
  const {text,clearFilter,universalData,setUniversalData,searchBar,categoryFilter,main,setMain}=useContext(noteContext);

  const [value,setValue]=useState(0);
  const [data,setData]=useState('');
  const updateFilter=(e)=>{
    setValue(e.target.value);
  }


  const url="https://course-api.com/react-store-products";
  const myfetchProducts=async()=>{
      try{
      const response = await fetch(url);
       const mydata=await response.json();
      setData(mydata);
      }
catch(e){

}
}
  




useEffect(()=>{ 
  myfetchProducts();
  },[]);

let unique= data && data.map((d)=>d.category);
let prices= data && data.map((d)=>d.price);


let uniqueColors= data && data.map((d)=>d.colors);
let a=[]
uniqueColors && uniqueColors.map((d)=>a=a.concat(d));
let colors=[...new Set(a)];

let categories=['all',...new Set(unique)];





  return (
    <section style={{marginLeft:"2rem"}}>
    <input type='text' onChange={searchBar} placeholder='search' value={text}/>
    <h4>Category</h4>
    {categories.map((d)=>{
      return (
      <div>
      <button  value={d} onClick={categoryFilter} className={`${main==d?'category-btn':''}`}>{d}</button>
      </div>)
    })}
   <div>
  <Color colors={colors}/>
  </div>

<h4>Price</h4>
<p style={{color:"#8651f1",fontWeight:"bold"}}>${value}</p>
<input type='range'  onChange={updateFilter} step={20} min={Math.min(...prices)} max={Math.max(...prices)} value={value}/><br/>
<label >Free Shipping</label>
<input type="checkbox"/><br/>

<button  onClick={clearFilter} style={{backgroundColor:'red',marginTop:'1rem',color:'white',borderRadius:'10px'}} >Clear Filter</button>

    </section>
  )
}

export default Filter