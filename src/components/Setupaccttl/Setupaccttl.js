import React from 'react'
import './Setupaccttl.css'
import aeroplane from '../Images/aeroplane.png'
import line from '../Images/lineprogress.png'

function Setupaccttl() {
  return (
    <div>
        <div className='setupaccttl'>
        <div className='setupaccttl-text'>
        <div className='setupaccttl-text-m'>
            <h1>
              Let’s<br/> get to<br/> know you!
            </h1>
            </div>
        </div>
        <div className='setupaccttl-form'>
            <p className='contact'><strong> Set up your account</strong></p>
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
                <button type='submit' className='btn-setupaccttl btn-setupaccty' disabled>Yes</button>
                <button type='submit' className='btn-setupaccttl btn-setupacctn' disabled>No</button>
                </div>
                <div className='setupaccttl-onboard'>
                    <p>
                        Great! What’s your ideal timeline?
                    </p>
                    <div className='setupaccttl-btn'>
                    <button type='submit' className='btn-timeline-p' disabled>As soon as possible</button>
                    <button type='submit' className='btn-timeline' disabled>6 months</button>
                    <button type='submit' className='btn-timeline' disabled>1 year</button>
                    <button type='submit' className='btn-timeline' disabled>Not sure</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Setupaccttl