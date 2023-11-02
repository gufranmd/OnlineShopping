import React, { useContext, useState } from 'react'
import { useEffect }  from 'react';
import noteContext from './noteContext';
const FeaturedProduct = () => {
    const {universalData,setUniversalData}=useContext(noteContext);
 return (
    <>
   <h2 style={{textAlign:'center'}}>Featured Product</h2>
   <div className='underline'></div>
    <div className='featured-container'>
        <section>
    {
        universalData.slice(0,4).map((d)=>{
            return(<div className='featured-block'>
    <a href={`/singleProduct/${d.id}`}>
                <img key={d.id} className='featured-img' src={d.image}>
                </img>
                </a>
    
                <div className='inside-featured-img'>
                <h5>{d.name}</h5>
                <h5 >${d.price}</h5>
                </div>
          </div>

            );
        })
    }
    </section>
    </div>
    </>
  )
}

export default FeaturedProduct