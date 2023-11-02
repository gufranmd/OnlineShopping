import React, { useContext } from 'react'
import { Route,redirect } from 'react-router-dom'
import noteContext from './noteContext'
import { Link } from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import Mycart from './Mycart'
const PrivateRoute = () => {
    const navigate=useNavigate();
    const {User} = useContext(noteContext);
   
    
  return User?<div>This is successfully authentication</div>:<Mycart/>
}

export default PrivateRoute