import React from 'react'
import NoteState from './NoteState'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Services from './Services'
import Contact from './Contact'
import FeaturedProduct from './FeaturedProduct'


const Home = () => {
  return (
    <NoteState>
        <Navbar/>
        <Sidebar/>
        <FeaturedProduct/>
        <Services/>
<Contact/>

        <Footer/>
    </NoteState>
  )
}

export default Home