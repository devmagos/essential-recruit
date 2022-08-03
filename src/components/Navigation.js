import React from 'react'
import './navigation.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home/Home.js'
import Contactus from './Contactus/Contactus.js'
import Createaccount from './Createaccount/Createaccount.js'
import Setupaccount from './Createaccount/Createaccount.js'
import Setupacctp from './Setupacctp/Setupacctp.js'
import Setupaccttl from './Setupaccttl/Setupaccttl.js'
import User from './User/Profile.js'
// import NavBar from './navbar'

function Navigation() {
	return (
		<div>
			<Router basename='/' id='container'>
				{/* <NavBar /> */}
				<div id='links'>
						<div>
							<Link to='/Home/Home.js' className='pages'>
								Home
							</Link>
							<Link to='/Contactus/Contactus.js' className='pages'>
								Contactus
							</Link>
							<Link to='/Createaccount/Createaccount.js' className='pages'>
								Create account
							</Link>
							<Link to='/Setupaccount/Setupaccount.js' className='pages'>
								Setup account
							</Link>
							<Link to='/Setupacctp/Setupacctp.js' className='pages'>
								Setup account progress
							</Link>
							<Link to='/Setupaccttl/Setupaccttl.js' className='pages'>
							Setup account timeline
							</Link>
							<Link to='/User/Profile.js' className='pages'>
								User
							</Link>
						</div>
						<div></div>

					<div>
						<Routes>
							<Route
								path='/'
							/>
							<Route path='/Home/Home.js' element={<Home />} />
							<Route
								path='/Contactus/Contactus.js'
								element={<Contactus />}
							/>
							<Route
								path='/Createaccount/Createaccount.js'
								element={<Createaccount />}
							/>
							<Route
								path='/Setupaccount/Setupaccount.js'
								element={<Setupaccount />}
							/>
							<Route
								path='/Setupacctp/Setupacctp.js'
								element={<Setupacctp />}
							/>
							<Route
								path='/Setupaccttl/Setupaccttl.js'
								element={<Setupaccttl />}
							/>
							<Route
								path='/User/Profile.js'
								element={<User />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default Navigation
