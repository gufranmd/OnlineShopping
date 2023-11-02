import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import noteContext from './noteContext'
import { Link } from 'react-router-dom'
import { isVisible } from '@testing-library/user-event/dist/utils'

const Mycart = () => {
const fun=()=>{

}
  const {getmycart,clearCart,User,loginWithRedirect}=useContext(noteContext);
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
        {data.length>0? data.map((c)=>{
          <p className='invisible'>{subtotal+=c.price*c.num}</p>
          return<>
           <div className='mycart-grid'>
            <p>{c.name}</p>
            <p>{c.num}</p>
            <p>{(c.price).toLocaleString()}</p>
            <p>{(c.price*c.num).toLocaleString()}</p>
            
         
          </div>
          </>
        }):<h3>cart is empty</h3>}
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