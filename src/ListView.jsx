import React, { useContext } from 'react'
import Color from './Color';
import noteContext from './noteContext';


const ListView = ({data}) => {
  const {filterout}=useContext(noteContext);
  data=filterout();
  return (
    <div style={{marginLeft:"2rem"}}>
          {data.length>0?
        data.map((d)=>{
            return(<div className='List-block'>
    <a href={`/mysingleProduct/${d.id}`}>
                <img key={d.id} className='list-img' src={d.image} alt={d.name}>
                </img>
                </a>
                <div>
                  <h4 className='text-color'>{d.name}</h4> 

                  <p style={{width:"80%"}}>{d.description}</p> 
                  <Color colors={d.colors}/>
                  <h3 className='text-color' >${d.price}</h3>
                </div>

          </div>

            );
        }):<h2>Sorry!! no data found</h2>
    }
    </div>
  )
}

export default ListView