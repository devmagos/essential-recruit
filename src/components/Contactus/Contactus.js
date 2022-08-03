import React from 'react'
import './Contactus.css'

function Contactus() {
  return (
    <div>
        Createaccount
        <div className='contactus'>
        <div className='contactus-text'>
          <div className='contactus-text-m'>
            <p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
              hello@essentialrecruit.careers
            </p>
            <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            12 Dawson Street, Dartmouth, NS, Canada. B3A 3A7
            </p>
            <p>
            <i class="fa fa-phone" aria-hidden="true"></i>
            +1 (782) 529-6483
            </p>
            </div>
        </div>
        <div className='contactus-form'>
            <p className='contact'><strong>Contact Us</strong></p>
            <form className='form'>
                <input type="text" className='form-inputs' placeholder='Enter your Name' />
                <input type="text" className='form-inputs' placeholder='Enter your Email Address' />
                <input type="text" className='form-inputs' placeholder='Email Subject' />
                <textarea rows="13" placeholder='Type in your message' cols="45" />
                <button type='submit' className='btn-contactus' disabled>Send Message</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contactus
