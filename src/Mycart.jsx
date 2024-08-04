import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import noteContext from './noteContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import empty from './empty_cart.svg'
import { isVisible } from '@testing-library/user-event/dist/utils'

const Mycart = () => {
const fun=()=>{

}
  const {getmycart,clearCart,User,loginWithRedirect ,deletefromCart}=useContext(noteContext);
  const data=getmycart();
  let subtotal=0;


  return (<>
    <Navbar/>
    <Sidebar/>
    <div className='cart-container'>
      <main>
     {data.length>0 && <div className='mycart-grid'>
            <h4>Name</h4>
            <h4>Quantity</h4>
            <h4>price</h4>
            <h4>subTotal</h4>
            
          </div>}
          <hr/>
        {data.length>0? data.map((c)=>{
          <p className='invisible'>{subtotal+=c.price*c.num}</p>
          return<>
           <div className='mycart-grid'>
            <div>
            <img className='cart-img' src={c.image} width={120} height={100}>
            </img>
            <h3 style={{textTransform:'capitalize'}}>{c.name}</h3>
            </div>
            <h3>{c.num}</h3>
            <h3>{(c.price).toLocaleString()}</h3>
            
            <h3>{(c.price*c.num).toLocaleString()}</h3>
            <button className='delete-btn' onClick={()=>deletefromCart(c.name)}><FaTrashAlt/></button>
            
         
          </div>
          </>
        }):<div style={{display:'flex',justifyContent:'center'}}><img src={empty} width={300}></img></div>}
      </main>
    </div>
    <div className='btn-grid-gap'>
      <Link to="/allProducts">
        <button className='btn' >Continue shopping</button></Link>
        <button className='btn-black' onClick={clearCart}>clear shopping cart</button>
      </div>

      <div style={{marginTop:'3rem'}} className='cart-container'>
        <section>
          <div className='payment-block'>
          <h4>Subtotal :  {subtotal.toLocaleString()}</h4>
          <h4>Shipping fee : {data.length>0?40:0}</h4>
          <hr/>
          <h3>Total items:   {data.length>0?(subtotal+40).toLocaleString():0}</h3>
          </div>
          <Link to="/checkout">
           <button className='btn-block' onClick={User?fun :loginWithRedirect} > proceed to checkout</button>
            </Link>
        </section>
       
      </div>
    
    </>
  )
}

export default Mycart