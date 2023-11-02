import React from 'react'
import Navbar from './Navbar';
import NoteState from './NoteState';
import Footer from './Footer';


const About = () => {
  return (
    <NoteState>
        
        <Navbar/>
        <div className='about-container'>
            <section>
        <img className='about-img' src='https://cdn.designbump.com/wp-content/uploads/2015/08/Great-Living-Room-Furniture-1.jpg' width={600}></img>
        <h2 className='heading'> Our Story</h2>
        <div className='underline'></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa amet blanditiis, earum reiciendis id perferendis eligendi sunt minima fuga impedit vel sit excepturi at eius fugiat doloribus esse et voluptatum.</p>
        </section>
        </div>
        <Footer/>
    </NoteState>
  )
}

export default About;