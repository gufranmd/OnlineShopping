import React, { useContext } from 'react'
import noteContext from './noteContext';

const GridView = ({data}) => {
  const {filterout}=useContext(noteContext);
 data=filterout();

  return (
    <>
    {/* <h1>{data.length}</h1> */}
          {data.length>0?
       data.map((d)=>{
            return(<div className='featured-block'>
    <a href={`/mysingleProduct/${d.id}`}>
                <img  key={d.id} className='featured-img' src={d.image} alt={d.name}>
                </img>
                </a>
    
                <div className='inside-featured-img'>
                <h5 className=''>{d.name}</h5>
                <h5 className=''>${d.price}</h5>
                </div>
          </div>

            );
        }):<h2>Sorry!! no data found</h2>
    }
    </>
  )
}

export default GridView