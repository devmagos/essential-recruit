import React from 'react'
import './Setupaccount.css'
import aeroplane from '../Images/aeroplane.png'

function Setupaccount() {
  return (
    <div>
        <div className='setupacct'>
        <div className='setupacct-text'>
        <div className='setupacct-text-m'>
            <h1>
              Let’s<br/> get to<br/> know you!
            </h1>
            </div>
        </div>
        <div className='setupacct-form'>
            <p className='contact'>
                <strong>
                    Set up your account
                </strong></p>
            <h6>Are you willing to relocate to Atlantic Canada?</h6>
            <form className='form'>
                <div className='form-airplane'>
                        <img src={aeroplane} className='form-airplane-img' alt="background logo"/>
                    <div>
                        <hr/>
                    </div>
                </div>

                <div className='form-text'>
                    <p>Relocation</p>
                    <p>Work and Experience</p>
                    <p>Career Details</p>
                    <p>Education</p>
                    <p>Specialties & Requirements</p>
                    <p>Personal Details</p>
                </div>
                <div className='form-btn'>
                <button type='submit' className='btn-setupacct' disabled>Yes</button>
                <button type='submit' className='btn-setupacct' disabled>No</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Setupaccount