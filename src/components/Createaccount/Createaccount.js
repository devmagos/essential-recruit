import React from 'react'
import './Createaccount.css'

function Createaccount() {
  return (
    <div>
        Create Account
        <div className='createacct'>
        <div className='createacct-text'>
        <div className='createacct-text-m'>
            <h2>
              Let’s<br/> get to<br/> know you!
            </h2>
            </div>
        </div>
        <div className='createacct-form'>
            <p className='contact'><strong>Create Account</strong></p>
            <h6>Kindly fill in these required details to create an account.</h6>
            <form className='form'>
                <input type="text" className='form-inputs' placeholder='Enter your Email Address' />
                <button type='submit' className='btn-createacct' disabled>Continue</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Createaccount