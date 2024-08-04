import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import noteContext from './noteContext';

const AddtoCart = (props) => {
    const [num,setNum]=useState(1);
    const {AddToCart,on}=useContext(noteContext);
   

    const decrease=()=>{
        if(num<=1){
            setNum(1);
        }else{
            setNum(num-1);
        }
    }

    const increase=()=>{
        if(num>=props.stock){
            setNum(props.stock);
        }else{
            setNum(num+1);
        }
    }
    
    const obj={
        name:props.name,
        price:props.price
    }
  return (
  <div>
  <div className='inline-btn'>
  <button onClick={decrease}>-</button>
  <h2>{num}</h2>
  <button onClick={increase}>+</button>
  </div>

<button className='btn' value ={[props.name,props.price,num,props.image]} disabled={on} onClick={AddToCart}>{on?'Added ✅':'Add to cart'}</button>
<Link to="/cart" className='btn'>Go to cart</Link>
</div>);
  
}

export default AddtoCart