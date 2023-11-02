import React from 'react'
import { useState, useEffect } from 'react';
import NoteState from './NoteState';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import AddtoCart from './AddtoCart';
import { BsFillCircleFill } from "react-icons/bs";
import Color from './Color';
import noteContext from './noteContext';
import { useContext } from 'react';
const SingleProduct = () => {
    const [main,setMain]=useState(0);
    const url="https://course-api.com/react-store-single-product?id=";
      const {id}=useParams();
      const [data,setData]=useState({});
    
      const SingleProducts=async()=>{
        const response=await fetch(`${url}${id}`);
         const mydata= await response.json();
         setData(mydata);
      
      }
    
    
      useEffect(()=>{
        SingleProducts();
       
      },[id]);
      const {colors,price, reviews,stars,stock,name,images,description}
      =data;
    ;
    
    

  return (
    
    <NoteState>
      <Navbar/>
      <Sidebar/>
     
      <div className='singleProduct'>
        <section >
          <div>
          <p>
        <Link  to="/allProducts" style={{fontSize:'23px'}} className='btn'>Back</Link>
        </p>
        {images?<img width={500} height={420} src={images[main].url}></img>:""}
        <div style={{width:'600px'}}>
          {images? images.map((d,index)=>{
            return
            <img width={30} height={60} className={`${images[main].url===d.url?'main-image-selector':'image-selector'}`} onClick={()=>setMain(index)} style={{marginRight:'0.6rem'}} src={d.url}></img>
          }):''}
        </div>
        </div>
        <div>
        <h2 style={{color:' #796611'}}>{name}</h2>
  
        <h4 style={{color:' #796607'}}>Price : ${price}</h4>
        <Stars stars={stars}/>
        <p>{description}</p>
        <p><b>Availability :</b> {stock?"In Stock":"Out of stock" }</p>
        <p><b>reviews :</b> {reviews}</p>
        <p><b>stars :</b> {stars}</p>
        <hr/>
        <Color colors={colors}/>
       {stock>0 && <AddtoCart stock={stock} name={name} price={price}/>}

       
        </div>
        </section>
        </div>
       
        </NoteState>
  );
}
  

export default SingleProduct