import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <section>
        <div>
        <h3>Join Us And Get 20% Off <br/>
        On Every Order</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus esse aperiam asperiores nobis possimus impedit quia debitis veritatis cupiditate?</p>
        </div>
       
        <form>
            <input type='email' placeholder='xyz@gmail.com'/>
            <input type='submit' className='btn' value="subscribe"/>
        </form>
        </section>

    </div>
  )
}

export default Contact