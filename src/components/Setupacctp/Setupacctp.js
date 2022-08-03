import React from 'react'
import './Setupacctp.css'
import aeroplane from '../Images/aeroplane.png'
import line from '../Images/lineprogress.png'

function Setupacctp() {
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
                        <img src={line} className='progressbar' alt="background logo"/>
                        <img src={aeroplane} className='form-airplane-img' alt="background logo"/>
                    <div>
                        <hr/>
                    </div>
                </div>

                <div className='form-text'>
                    <p className='form-textr'>Relocation</p>
                    <p>Work and Experience</p>
                    <p>Career Details</p>
                    <p>Education</p>
                    <p>Specialties & Requirements</p>
                    <p>Personal Details</p>
                </div>
                <div className='form-btn'>
                <button type='submit' className='btn-setupacct btn-setupaccty' disabled>Yes</button>
                <button type='submit' className='btn-setupacct btn-setupacctn' disabled>No</button>
                </div>
                <div className='setupacct-onboard'>
                    <p>
                    We are currently recruiting for employers in Atlantic<br/> 
                    Canada, but will be expanding in no time!
                    </p>
                    <div className='setupacct-onboard-btn'>
                    <button type='submit' className='btn-onboard' disabled>Continue onboarding</button>
                    <button type='submit' className='btn-onboard' disabled>Continue at a later time</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Setupacctp