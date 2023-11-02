import React from 'react'
import NoteState from './NoteState'
import Navbar from './Navbar'
import Footer from './Footer'

const ErrorPage = () => {
  return (
    <NoteState>
        <Navbar/>
        <div className='container'>
            <section>
                <h1>Error!!</h1>
                <h1>404</h1>
                <h3>The page which you are looking is not found!!</h3>
            </section>
        </div>
        <Footer/>
    </NoteState>
  )
}

export default ErrorPage