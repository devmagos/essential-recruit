import Navigation from './Navigation.js'
import './Navbar.css'


function NavBar() {
	return (
		<div id='topnav'>
            <a href="/Home/Home.js">
				<button className='pages'>Home</button>
            </a>
            <a href='/Contactus/Contactus.js'>
				<button  className='pages'>Contact Us</button>
            </a>
            <a href='/Createaccount/Createaccount.js'>
                <button className='pages'>Create account</button>
            </a>
            <a href='/Setupaccount/Setupaccount.js'>
				<button  className='pages'>Set up account</button>
            </a>
            <a href='/Setupaccountp/Setupaccountp.js'>
                <button  className='pages'>Account progess</button>
            </a>
            <a href='/Setupaccounttl/Setupaccounttl.js'>
				<button className='pages'>Account timeline</button>
            </a>
            <a href='/User/User.js'>
                <button  className='pages'>User</button>
            </a>
		</div>
	)
}

export default NavBar
