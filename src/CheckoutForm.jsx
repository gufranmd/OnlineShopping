import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import NoteState from './NoteState'

const CheckoutForm = () => {
  return (
    <NoteState>
    <Navbar/>
    <Sidebar/>
    <div>Checkout form is here</div>
    </NoteState>
  )
}

export default CheckoutForm