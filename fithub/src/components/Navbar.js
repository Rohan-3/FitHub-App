import React from 'react'
import '../assets/styles/NavBar.css'
import Logo from '../assets/images/FithubLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <div className='logo'>
      <img src={Logo} alt=''/>
      </div>
      <div className='nav-links'>
      <ul>
          <Link to='/' style={{ color: 'white', textDecoration:'none'}}>Home</Link>
          <li>About</li>
          <li>Workout</li>
          <li>Nutrition</li>
          <li>Register/Login</li>
          <Link to='/contact' style={{ color: 'white', textDecoration:'none'}}>Contact</Link>
        </ul>
      </div>

    </div>
    </>

  )
}

export default Navbar