import React from 'react'
import './Home.css'
import background from '../Images/background.png'
import backgrounda from '../Images/background-2.png'
import busha from '../Images/busha.png'
import sirius from '../Images/sirius.png'
import talentql from '../Images/talentql.png'
import altschool from '../Images/altschool.png'
import decagon from '../Images/decagon.png'
import man from '../Images/smiling-man.png'
import handshake from '../Images/hand-shake.png'
import hamza from '../Images/hamza.png'
import rasheed from '../Images/rasheed.png'
import moe from '../Images/moe.png'
import umeira from '../Images/umeira.png'
import ursula from '../Images/ursula.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import flash from '../Images/flash.png'
// import flash from '../Images/flash.png'
import arrow from '../Images/arrow.png'
// import quidax from '../Images/quidax.png'

function Home() {
    return (
        <div>
            <div className="navbar">Navbar</div>
            <div className="logo-background">
            <img src={background} alt="background logo"/>
            </div>
            <div className="companies-bar">
            <img src={busha} className="logo" alt="busha logo"/>
            <img src={sirius} className="logo" alt="sirius logo"/>
            <img src={talentql} className="logo" alt="talentql logo"/>
            <img src={altschool} className="logo" alt="altschool logo"/>
            <img src={decagon} className="logo" alt="decagon logo"/>
            {/* <img src={quidax} className="logo" alt="quidax logo"/> */}
            </div>

            <div className="mission-statement">
               <h2 className="set-apart">What sets us apart </h2>
               <h4 className="connections">We take care of building connections, relocation, 
                   and settlement, so that you can focus on bringing the best you.
               </h4>
            </div>
            <div className="card-section">
                <div className="cards">
                    <img src={flash} className="cards-logo" alt="decagon logo"/>
                    <h4>Connections</h4>
                    <p>
                    Whether you’re an employer searching for your ideal candidate, or a 
                    healthcare worker looking to work in Canada, we are a human-focused 
                    transparent platform that connects skill to value and value to skill.
                    </p>
                </div>
                <div className="cards">
                     <img src={flash} className="cards-logo" alt="decagon logo"/>
                    <h4>Immigration</h4>
                    <p>
                    Our experienced immigration consultants help you put together the right 
                    immigration documents in a clear and concise system that gives you one 
                    less thing to worry about.
                    </p>
                </div>
                <div className="cards">
                    <img src={arrow} className="cards-logo" alt="decagon logo"/>
                    <h4>Settlement</h4>
                    <p>
                    Job connections and immigration are just the start, we have curated services 
                    to connect you to the commnity, get relevant licenses, and set you up for 
                    success even before you arrive.
                    </p>
                </div>
            </div>
            <div>
            <img src={backgrounda} alt="background logo"/>
            </div>
            <div className="applicants">
                <div className="applicants-text">
                    <h3>
                    The Canadian Healthcare industry needs you!
                    </h3>
                    <h6>
                    There’s a job for you!!! Here’s how it works
                    </h6>
                    <h5>
                    Sign up and confirm your email.
                    </h5>
                    <p>
                    Create an account, complete the onboarding 
                    questions,<br/> and your profile. Get connected 
                    to employers looking for<br/> your amazing skills 
                    and experience.
                    </p>
                    <h5>Explore your options</h5>
                    <p>Review interview requests, set up an interview, 
                        and<br/> accept an offer.
                    </p>
                    <h5>Immigration paperwork</h5>
                    <p>
                    Complete our immigration questionnaire to get you 
                    connected<br/> to a licensed consultant who will be a 
                    guide to make sure you<br/> have the right documents in 
                    place for your visa.
                    </p>
                    <h5>Complete your Immigration process</h5>
                    <p>
                    Once complete, you will have access to our settlement 
                    suite<br/> which guides you through the steps for your 
                    license post-<br/>arrival and curated options for settlement 
                    services including<br/> finding accomodation, airport pickup,
                    etc.
                    </p>
                </div>
                <div className="applicants-logo">
                    <img src={man} className="smiling-man" alt="background logo"/>
                </div>
            </div>

            <div className="recruiters">
                <div className="recruiters-logo">
                <img src={handshake} className="logo-recruiters" alt="background logo"/>
                </div>
                <div className="recruiters-text">
                    <h3>
                    Get connected to pre-vetted talents in months minutes
                    </h3>
                    <h6>
                      Find the best talent!!! Here’s how it works.
                    </h6>
                    <h5>
                    Request for a Demo
                    </h5>
                    <p>
                    A team member will contact you to understand your<br/> needs 
                    and culture. This enables us to fill your pipeline with<br/> 
                    skilled talent that not only fits right but also makes 
                    sure<br/> applicants are aware of what it’s like to work with you.
                    </p>
                    <h5>
                    Sign up and confirm your email
                    </h5>
                    <p>
                    Create an account, complete our onboarding<br/> questions, and your 
                    corporate profile. Get access to a<br/> talent pool already tailored 
                    to your needs!
                    </p>
                    <h5>
                    Interview and offers
                    </h5>
                    <p>
                    See what you like? Send an interview request, speak to your<br/> preferred 
                    applicant, and make an offer!
                    </p>
                    <h5>
                    Retention
                    </h5>
                    <p>
                    We understand that attracting and hiring applicants are just<br/> the first steps, 
                    so we take care of setting them up for<br/> success in their new community so that 
                    you can focus on what matters most-providing quality healthcare for all of us!
                    </p>
                </div>
            </div>
            <div className="testimony-solutions">
            <div className="solutions">
                <h3>
                Delivering solutions that result in happy users!
                </h3>
            </div>
            <div className="testimonials">
            <p>
            &#x201C; You’re tuned to Dawn FM, the middle of nowhere on your dial. So sit back &#x201C;<br/> and unpack, you 
            might be here a while. Now that all future plans have been<br/> postponed and it’s time to look 
            back on the things you thought you owned.
            </p>
            <div className='abdel-text'>
                <p>-Abel Tesfaye</p>
            </div>
            <div className="testimonial-logo">
            <img src={hamza} className="logo-testimonials" alt="background logo"/>
            <img src={moe} className="logo-testimonials" alt="background logo"/>
            <img src={rasheed} className="logo-testimonials" alt="background logo"/>
            <img src={umeira} className="logo-testimonials" alt="background logo"/>
            <img src={ursula} className="logo-testimonials" alt="background logo"/>
            </div>
            </div> 
            </div>

            <div className='questions'>
                <h3>Still got questions?</h3>
                <p>Leave us a message and we will be in touch.</p>
                <button className='questions-btn'>Contact Us</button>
            </div>

            <div className='footer'>
                <div className='footer-top'>
                <div className='footer-icons'>
                    <p>essentialrecruit</p>
                    <img src={instagram} className="footer-icons-logo" alt="background logo"/>
                    <img src={twitter} className="footer-icons-logo" alt="background logo"/>
                    <img src={linkedin} className="footer-icons-logo" alt="background logo"/>
                    <img src={facebook} className="footer-icons-logo" alt="background logo"/>
                </div>

                <div className='contactus'>
                <div className='company'>
                    <h5>Company</h5>
                    <p>About us</p>
                    <h6>FAQs</h6>
                </div>
                <div className='legal'>
                    <h5>Legal</h5>
                    <p>Terms & Conditions</p>
                    <h6>Privacy Policy</h6>
                </div>
                <div className='contact'>
                    <h5>Contact</h5>
                    <p>hello@essentialrecruit.careers</p>
                    <p>+1 (782) 529-6483</p>
                    <p>
                    12 Dawson Street, Dartmouth, NS,<br /> 
                    Canada. B3A 3A7
                    </p>
                </div>
                </div>
                </div>
                <div className='contactus-copyright'>
                    <p>Copyright 2022 Essential Recruit. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
