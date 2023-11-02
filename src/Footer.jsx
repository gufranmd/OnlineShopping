import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div> 
        <h4>
        &copy;
        {new Date().getFullYear()}
        </h4>
        <h4>All rights reserved</h4>
        </div>
    </div>
  )
}

export default Footer